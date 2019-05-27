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

export const toggleExpandRow = (informationTypeId: number) =>
  action(DataActionTypes.TOGGLE_ROW, { informationTypeId });

export const toggleExpandRowPolicy = (informationTypeId: number, policyId: number) =>
  action(DataActionTypes.TOGGLE_ROW_POLICY, { informationTypeId, policyId });

export const toggleEditView = (informationTypeId: number) =>
  action(DataActionTypes.TOGGLE_EDIT_VIEW, { informationTypeId });

export const fetchPolicyForInformationType = (query: any, informationTypeId: number) =>
  action(DataActionTypes.FETCH_POLICY_FOR_INFORMATION_TYPE_REQUEST, {
    query: {
      ...query,
      sort: get(query, 'sort')
    },
    informationTypeId
  });

export const fetchPolicyForInformationTypeSuccess = (
  result: any,
  previousQuery: any,
  informationTypeId: number
) =>
  action(DataActionTypes.FETCH_POLICY_FOR_INFORMATION_TYPE_SUCCESS, {
    result,
    previousQuery,
    informationTypeId
  });

export const fetchPolicyForInformationTypeFailure = (
  error: ApiError,
  informationTypeId: number
) =>
  action(DataActionTypes.FETCH_POLICY_FOR_INFORMATION_TYPE_FAILURE, {
    error,
    informationTypeId
  });
