import { action } from 'typesafe-actions';

import { ApiError } from './modelsApi';
import { DataActionTypes } from './types';

export const fetchData = (query: any) =>
  action(DataActionTypes.FETCH_DATA_REQUEST, query);

export const fetchDataSuccess = (result: any, previousQuery: any) =>
  action(DataActionTypes.FETCH_DATA_SUCCESS, { result, previousQuery });

export const fetchDataFailure = (error: ApiError) =>
  action(DataActionTypes.FETCH_DATA_FAILURE, { error });

export const toggleExpandRow = (id: number) => action(DataActionTypes.TOGGLE_ROW, { id });
