import { all, call } from 'redux-saga/effects';
import { configSaga } from '../config/configSaga';
import {
  dataSaga,
  policyForInformationTypeSaga,
  createInformationTypeSaga
} from '../pages/dataCatalog/saga';

export function* rootSaga() {
  yield all([
    call(configSaga),
    call(dataSaga),
    call(policyForInformationTypeSaga),
    call(createInformationTypeSaga)
  ]);
}
