import { all, call } from 'redux-saga/effects';
import { configSaga } from '../config/configSaga';
import { dataSaga } from '../pages/mainPage/saga';

export function* rootSaga() {
  yield all([call(configSaga), call(dataSaga)]);
}
