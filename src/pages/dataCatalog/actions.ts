import { action } from 'typesafe-actions';
import { get } from 'lodash';
import { ApiError } from './modelsApi';
import { DataActionTypes } from './types';

export const fetchData = (query: any) =>
  action(DataActionTypes.FETCH_DATA_REQUEST, {
    query: {
      ...query,
      sort: get(query, 'sort')
    }
  });

export const fetchDataSuccess = (result: any, previousQuery: any) =>
  action(DataActionTypes.FETCH_DATA_SUCCESS, { result, previousQuery });

export const fetchDataFailure = (error: ApiError) =>
  action(DataActionTypes.FETCH_DATA_FAILURE, { error });

export const toggleExpandRow = (id: number) => action(DataActionTypes.TOGGLE_ROW, { id });
