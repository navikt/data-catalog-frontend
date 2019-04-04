import { action } from 'typesafe-actions';

import { ApiError } from './modelsApi';
import { DataActionTypes, Data, DataValue } from './types';

export const getData = (dataValue: DataValue) =>
  action(DataActionTypes.GET_DATA, dataValue);

export const fetchData = (dataValue: DataValue) =>
  action(DataActionTypes.FETCH_DATA_REQUEST, dataValue);

export const fetchDataSuccess = (dataValue: DataValue, data: Data[]) =>
  action(DataActionTypes.FETCH_DATA_SUCCESS, { dataValue, data });

export const fetchDataFailure = (dataValue: DataValue, error: ApiError) =>
  action(DataActionTypes.FETCH_DATA_FAILURE, { dataValue, error });
