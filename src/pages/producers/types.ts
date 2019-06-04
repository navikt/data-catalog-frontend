import { ActionType } from 'typesafe-actions';

import * as codeListActions from './actions';

export type CodeListActions = ActionType<typeof codeListActions>;

export const enum CodeListActionTypes {
  FETCH_CODE_LIST_REQUEST = '@data/FETCH_CODE_LIST_REQUEST',
  FETCH_CODE_LIST_SUCCESS = '@data/FETCH_CODE_LIST_SUCCESS',
  FETCH_CODE_LIST_FAILURE = '@data/FETCH_CODE_LIST_FAILURE'
}

export interface CodeListView {
  codeListId: number;
  listName: string;
  code: string;
  description: string;
}
