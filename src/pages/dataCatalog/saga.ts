import { all, call, put, takeEvery } from 'redux-saga/effects';

import { restGet } from '../../api';
import { ApiPath } from './modelsApi';
import { fetchData, fetchDataFailure, fetchDataSuccess } from './actions';
import { DataActionTypes } from './types';

function* fetchDataSaga(action: ReturnType<typeof fetchData>) {
  try {
    const query = Object.freeze(action.payload.query);

    const url = ApiPath.DataPath;
    // 'http://localhost:8080/api/v1/*'
    // const res = yield call(restGet, 'http://localhost:8080' + url);
    //  const res = yield call(restGet, 'https://107.178.240.63' + url);
    // const res = yield call(restGet, 'https://35.201.118.102' + url);
    const res = yield call(restGet, url, null, query);
    const json = yield res.json();

    if (res.ok) {
      yield put(fetchDataSuccess(json, query));
    } else {
      yield put(fetchDataFailure(json));
    }
  } catch (error) {
    yield put(fetchDataFailure(error));
  }
}

export function* dataSaga() {
  yield all([takeEvery(DataActionTypes.FETCH_DATA_REQUEST, fetchDataSaga)]);
}
