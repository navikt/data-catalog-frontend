import { all, call } from 'redux-saga/effects';
import { configSaga } from '../config/configSaga';
import {
  getInformationTypeSaga,
  policyForInformationTypeSaga,
  createInformationTypeSaga
} from '../pages/dataCatalog/saga';
import { getCodeListSaga } from '../pages/producers/saga';

export function* rootSaga() {
  yield all([
    call(configSaga),
    call(getInformationTypeSaga),
    call(policyForInformationTypeSaga),
    call(createInformationTypeSaga),
    call(getCodeListSaga)
  ]);
}
