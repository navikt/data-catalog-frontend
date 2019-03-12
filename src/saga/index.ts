import { all, call } from 'redux-saga/effects';

import { configSaga } from '../config/configSaga';

export function* rootSaga() {
  yield all([call(configSaga)]);
}
