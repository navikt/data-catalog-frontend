import { ActionType } from 'typesafe-actions';

import { ApiError } from './modelsApi';
import * as dataActions from './actions';

export enum DataValue {
  AllData = 'allRecords'
}

export type DataActions = ActionType<typeof dataActions>;

export const enum DataActionTypes {
  GET_DATA = '@data/GET_DATA',
  FETCH_DATA_REQUEST = '@data/FETCH_DATA_REQUEST',
  FETCH_DATA_SUCCESS = '@data/FETCH_DATA_SUCCESS',
  FETCH_DATA_FAILURE = '@data/FETCH_DATA_FAILURE'
}

export type DataState = {
  [dataValue in DataValue]?: {
    isPending: boolean;
    error?: ApiError;
    data: Data[];
  }
};

export interface Data {
  name: string;
  description: string;
  category: string;
  sensitivity: string;
  ownership: string;
  sourceOfRecord: string;
  qualityOfData: string;
  personalData: boolean;
  internalMaster: string;
}
