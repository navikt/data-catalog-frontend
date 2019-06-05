import { action } from 'typesafe-actions';
import { get } from 'lodash';
import { ApiError } from './modelsApi';
import { DataActionTypes, InformationType } from './types';

export const fetchInformationType = (query: any) =>
  action(DataActionTypes.FETCH_INFORMATION_TYPE_REQUEST, {
    query: {
      ...query,
      sort: get(query, 'sort')
    }
  });

export const fetchInformationTypeSuccess = (result: any, previousQuery: any) =>
  action(DataActionTypes.FETCH_INFORMATION_TYPE_SUCCESS, { result, previousQuery });

export const fetchInformationTypeFailure = (error: ApiError) =>
  action(DataActionTypes.FETCH_INFORMATION_TYPE_FAILURE, { error });

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
      sort: get(query, 'sort'),
      informationTypeId
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

export const sendInformationType = (
  informationType: InformationType,
  redirectToOnSuccess: string
) =>
  action(DataActionTypes.SEND_INFORMATION_TYPE_REQUEST, {
    informationType,
    redirectToOnSuccess
  });

export const sendInformationTypeSuccess = (sentInformationType: InformationType) =>
  action(DataActionTypes.SEND_INFORMATION_TYPE_SUCCESS, sentInformationType);

export const sendInformationTypeFailur = (error: ApiError) =>
  action(DataActionTypes.SEND_INFORMATION_TYPE_FAILURE, error);
