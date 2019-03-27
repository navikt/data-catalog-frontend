import { all, call, put, select, takeEvery } from 'redux-saga/effects';
import { get } from 'lodash';

import { restGet } from '../../api';
import { ApiPath } from './modelsApi';
import { fetchData, fetchDataFailure, fetchDataSuccess, getData } from './actions';
import { DataActionTypes } from './types';

function* getDataSaga(action: ReturnType<typeof getData>) {
  const dataCache = yield select(state => get(state, ['data', action.payload, 'data']));
  const isRequestPending = yield select(state =>
    get(state, ['data', action.payload, 'pending'])
  );
  if (dataCache || isRequestPending) {
    return;
  }

  yield put(fetchData(action.payload));
}

function* fetchDataSaga(action: ReturnType<typeof fetchData>) {
  try {
    const url = `${ApiPath.DataPath}/${action.payload}`;
    // 'http://localhost:8080/api/v1/*'
    // const res = yield call(restGet, 'http://localhost:8080' + url);
    const res = yield call(restGet, 'https://35.201.118.102' + url);
    const json = yield res.json();

    if (res.ok) {
      yield put(fetchDataSuccess(action.payload, json));
    } else {
      yield put(fetchDataFailure(action.payload, json));
    }
  } catch (error) {
    yield put(fetchDataFailure(action.payload, error));
  }
}

export function* dataSaga() {
  yield all([
    takeEvery(DataActionTypes.GET_DATA, getDataSaga),
    takeEvery(DataActionTypes.FETCH_DATA_REQUEST, fetchDataSaga)
  ]);
}
