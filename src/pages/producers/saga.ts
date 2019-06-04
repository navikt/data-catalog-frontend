import { all, call, put, takeEvery } from 'redux-saga/effects';

import { restGet } from '../../api';
import { ApiPath } from './modelsApi';
import { fetchCodeList, fetchCodeListSuccess, fetchCodeListFailure } from './actions';
import { CodeListActionTypes } from './types';

function* fetchCodeListSaga(action: ReturnType<typeof fetchCodeList>) {
  try {
    const resProducer = yield call(restGet, ApiPath.CodeListProducerPath);
    const resCategory = yield call(restGet, ApiPath.CodeListCategoryPath);
    const resSystem = yield call(restGet, ApiPath.CodeListSystemPath);
    const resPurpose = yield call(restGet, ApiPath.CodeListPurposePath);

    const json = {
      producer: yield resProducer.json(),
      category: yield resCategory.json(),
      system: yield resSystem.json(),
      purpose: yield resPurpose.json()
    };

    if (resProducer.ok && resCategory.ok && resSystem.ok && resPurpose.ok) {
      yield put(fetchCodeListSuccess(json));
    } else {
      yield put(fetchCodeListFailure(json));
    }
  } catch (error) {
    yield put(fetchCodeListFailure(error));
  }
}

export function* getCodeListSaga() {
  yield all([takeEvery(CodeListActionTypes.FETCH_CODE_LIST_REQUEST, fetchCodeListSaga)]);
}
