import { ActionType } from 'typesafe-actions';

import * as dataActions from './actions';

export type DataActions = ActionType<typeof dataActions>;

export const enum DataActionTypes {
  GET_DATA = '@data/GET_DATA',
  FETCH_DATA_REQUEST = '@data/FETCH_DATA_REQUEST',
  FETCH_DATA_SUCCESS = '@data/FETCH_DATA_SUCCESS',
  FETCH_DATA_FAILURE = '@data/FETCH_DATA_FAILURE',
  TOGGLE_ROW = '@data//TOGGLE_ROW'
}

export type DataState =
  | {
      pending: boolean;
      error: String | null;
      previousQuery: String | null;
      result: Result;
    }
  | undefined;

export type Result = {
  currentPage: number;
  pageSize: number;
  totalPages?: number;
  totalElements: number;
  content: InformationType[];
};

export interface InformationType {
  informationTypeId: number;
  name: string;
  description: string;
  sourceOfRecord: string;
  personalData: boolean;
  itSystem: string;
  isOpen?: boolean;
}
