import { expectSaga } from 'redux-saga-test-plan';
import { throwError } from 'redux-saga-test-plan/providers';

import { restGet } from '../../../api';
import { availabilitySaga } from '../availabilitySaga';
import {
  getResourceAvailabilityFailure,
  getResourceAvailabilitySuccess
} from '../availabilityActions';

describe('availabilitySaga', () => {
  const responseJson = {
    test: true
  };

  const getCallsMock = (restGetResponse: any) => {
    return {
      call({ fn }: { fn: any }, next: any) {
        if (fn === restGet) {
          return restGetResponse;
        }

        return next();
      }
    };
  };

  const defaultResponse = {
    ok: true,
    json: () => responseJson
  };

  test('should fetch availability and dispatch success action if successful', () => {
    return expectSaga(availabilitySaga)
      .provide(getCallsMock(defaultResponse))
      .put(getResourceAvailabilitySuccess(responseJson))
      .silentRun();
  });

  test('should fetch availability and dispatch failure action if response is not 200', () => {
    const response = {
      ...defaultResponse,
      ok: false
    };

    return expectSaga(availabilitySaga)
      .provide(getCallsMock(response))
      .put(getResourceAvailabilityFailure(responseJson))
      .silentRun();
  });

  test('should fetch availability and dispatch failure action if call failed', () => {
    const error = new Error('testError');
    const errorResponse = {
      message: 'En feil oppstod ved henting av tilgjengelige eksterne ressurser'
    };

    return expectSaga(availabilitySaga)
      .provide({
        call({ fn }, next) {
          if (fn === restGet) {
            return throwError(error);
          }

          return next();
        }
      })
      .put(getResourceAvailabilityFailure(errorResponse))
      .silentRun();
  });
});
