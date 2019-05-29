import { all, call, put, takeEvery } from 'redux-saga/effects';

import { restGet } from '../../api';
import { ApiPath } from './modelsApi';
import {
  fetchData,
  fetchDataFailure,
  fetchDataSuccess,
  fetchPolicyForInformationType,
  fetchPolicyForInformationTypeSuccess,
  fetchPolicyForInformationTypeFailure
} from './actions';
import { DataActionTypes } from './types';

function* fetchDataSaga(action: ReturnType<typeof fetchData>) {
  try {
    const query = Object.freeze(action.payload.query);

    const url = ApiPath.DataPath;
    // 'http://localhost:8080/api/v1/*'
    // const res = yield call(restGet, 'http://localhost:8080' + url);
    // const res = yield call(restGet, 'https://35.201.118.102' + url, null, query);
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

function* fetchPolicyForInformationtypeSaga(
  action: ReturnType<typeof fetchPolicyForInformationType>
) {
  try {
    const query = Object.freeze(action.payload.query);

    const url = ApiPath.PolicyForInformationTypePath;
    const res = yield call(restGet, url, null, query);
    const json = yield res.json();

    if (res.ok) {
      yield put(
        fetchPolicyForInformationTypeSuccess(
          json,
          query,
          action.payload.informationTypeId
        )
      );
    } else {
      yield put(
        fetchPolicyForInformationTypeFailure(json, action.payload.informationTypeId)
      );
    }
  } catch (error) {
    yield put(
      fetchPolicyForInformationTypeFailure(error, action.payload.informationTypeId)
    );
  }
}

export function* policyForInformationtypeSaga() {
  yield all([
    takeEvery(
      DataActionTypes.FETCH_POLICY_FOR_INFORMATION_TYPE_REQUEST,
      fetchPolicyForInformationtypeSaga
    )
  ]);
}
