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
  content: InformationTypeView[];
};

export interface Auditable {
  createdBy?: string;
  createdDate?: string;
  lastModifiedBy?: string;
  lastModifiedDate?: string;
}

export interface CodeList extends Auditable {
  codeListId: number;
  listName: string;
  code: string;
  description: string;
}

export interface InformationType extends Auditable {
  informationTypeId: number;
  name: string;
  description: string;
  personalData?: boolean;
  isOpen?: boolean;
  category?: CodeList;
  producer?: CodeList;
  system?: CodeList;

  elasticsearchId?: number;
  elasticsearchStatus?: string;
}

export interface Purpose extends Auditable {
  purposeId: number;
  purposeCode: string;
  description: string;
}

export interface LegalBasis extends Auditable {
  legalBasisid: number;
  description: string;
}

export interface Policy extends Auditable {
  policyId: number;
  purpose: Purpose;
  legalBasisDescription?: string;
  legalBasis?: LegalBasis;
}

export interface InformationTypeView extends InformationType {
  policy?: Policy[];
}
