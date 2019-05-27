import { all, call } from 'redux-saga/effects';
import { configSaga } from '../config/configSaga';
import { dataSaga, policyForInformationtypeSaga } from '../pages/dataCatalog/saga';

export function* rootSaga() {
  yield all([call(configSaga), call(dataSaga), call(policyForInformationtypeSaga)]);
}
