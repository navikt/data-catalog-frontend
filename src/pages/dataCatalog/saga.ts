import { all, call, put, takeEvery, takeLatest } from 'redux-saga/effects';

import { restGet, restPost, restPut } from '../../api';
import { ApiPath } from './modelsApi';
import {
  fetchInformationType,
  fetchInformationTypeFailure,
  fetchInformationTypeSuccess,
  fetchPolicyForInformationType,
  fetchPolicyForInformationTypeSuccess,
  fetchPolicyForInformationTypeFailure,
  saveInformationType,
  saveInformationTypeSuccess,
  saveInformationTypeFailure
} from './actions';
import { DataActionTypes } from './types';

function* fetchInformationTypeSaga(action: ReturnType<typeof fetchInformationType>) {
  try {
    const query = Object.freeze(action.payload.query);

    const url = ApiPath.InformationTypePath;
    // 'http://localhost:8080/api/v1/*'
    // const res = yield call(restGet, 'http://localhost:8080' + url);
    //  const res = yield call(restGet, 'https://107.178.240.63' + url);
    // const res = yield call(restGet, 'https://35.201.118.102' + url, null, query);
    const res = yield call(restGet, url, null, query);
    const json = yield res.json();

    if (res.ok) {
      yield put(fetchInformationTypeSuccess(json, query));
    } else {
      yield put(fetchInformationTypeFailure(json));
    }
  } catch (error) {
    yield put(fetchInformationTypeFailure(error));
  }
}

export function* getInformationTypeSaga() {
  yield all([
    takeEvery(DataActionTypes.FETCH_INFORMATION_TYPE_REQUEST, fetchInformationTypeSaga)
  ]);
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

export function* policyForInformationTypeSaga() {
  yield all([
    takeEvery(
      DataActionTypes.FETCH_POLICY_FOR_INFORMATION_TYPE_REQUEST,
      fetchPolicyForInformationtypeSaga
    )
  ]);
}

function* saveInformationTypeSaga(action: ReturnType<typeof saveInformationType>) {
  try {
    const res = yield call(
      action.payload.informationType && action.payload.informationType.informationTypeId
        ? restPut
        : restPost,
      ApiPath.InformationTypePath,
      action.payload.informationType
    );
    if (res.ok) {
      yield put(saveInformationTypeSuccess(action.payload.informationType));
    } else {
      yield put(saveInformationTypeFailure(yield res.json()));
    }
  } catch (error) {
    yield put(saveInformationTypeFailure(error));
  }
}

export function* createInformationTypeSaga() {
  yield all([
    takeLatest(DataActionTypes.SAVE_INFORMATION_TYPE_REQUEST, saveInformationTypeSaga)
  ]);
}
