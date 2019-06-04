import { ActionType } from 'typesafe-actions';

import * as dataActions from './actions';

export type DataActions = ActionType<typeof dataActions>;

export const enum DataActionTypes {
  FETCH_INFORMATION_TYPE_REQUEST = '@data/FETCH_INFORMATION_TYPE_REQUEST',
  FETCH_INFORMATION_TYPE_SUCCESS = '@data/FETCH_INFORMATION_TYPE_SUCCESS',
  FETCH_INFORMATION_TYPE_FAILURE = '@data/FETCH_INFORMATION_TYPE_FAILURE',

  TOGGLE_ROW = '@data//TOGGLE_ROW',
  TOGGLE_ROW_POLICY = '@data//TOGGLE_ROW_POLICY',
  TOGGLE_EDIT_VIEW = '@data//TOGGLE_EDIT_VIEW',

  FETCH_POLICY_FOR_INFORMATION_TYPE_REQUEST = '@data/FETCH_POLICY_FOR_INFORMATION_TYPE_REQUEST',
  FETCH_POLICY_FOR_INFORMATION_TYPE_SUCCESS = '@data/FETCH_POLICY_FOR_INFORMATION_TYPE_SUCCESS',
  FETCH_POLICY_FOR_INFORMATION_TYPE_FAILURE = '@data/FETCH_POLICY_FOR_INFORMATION_TYPE_FAILURE',

  SEND_INFORMATION_TYPE_REQUEST = '@data/SEND_INFORMATION_TYPE_REQUEST',
  SEND_INFORMATION_TYPE_SUCCESS = '@data/SEND_INFORMATION_TYPE_SUCCESS',
  SEND_INFORMATION_TYPE_FAILURE = '@data/SEND_INFORMATION_TYPE_FAILURE'
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
  isEdit?: boolean;
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
  isOpen?: boolean;
  isEdit?: boolean;
}

export interface InformationTypeView extends InformationType {
  policy?: PolicyResult;
}

export interface PolicyResult {
  result: {
    currentPage: number;
    pageSize: number;
    totalElements: number;
    content: Policy[];
  };
  pending: boolean;
  error: string | null;
  previousQuery: string | null;
}

export const PolicyResultDefaultValue = {
  result: {
    currentPage: 0,
    pageSize: 10,
    totalElements: 0,
    content: []
  },
  pending: false,
  error: null,
  previousQuery: null
};

export interface ApiError {
  readonly message: string;
}
