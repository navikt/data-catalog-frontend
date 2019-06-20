import { Reducer } from 'redux';

import {
  DataActions,
  DataActionTypes,
  DataState,
  InformationTypeView,
  Policy
} from './types';

export const initialState: DataState = {
  result: {
    currentPage: 0,
    pageSize: 20,
    totalElements: 0,
    content: []
  },
  pending: false,
  error: null,
  previousQuery: null
};

const reducer: Reducer<any, DataActions> = (state = initialState, action) => {
  switch (action.type) {
    case DataActionTypes.FETCH_INFORMATION_TYPE_REQUEST:
      return {
        ...state,
        pending: true
      };
    case DataActionTypes.FETCH_INFORMATION_TYPE_SUCCESS:
      return {
        ...state,
        result: action.payload.result,
        error: undefined,
        pending: false,
        previousQuery: action.payload.previousQuery
      };
    case DataActionTypes.FETCH_INFORMATION_TYPE_FAILURE:
      return {
        ...state,
        result: [],
        error: action.payload.error,
        pending: false
      };
    case DataActionTypes.ADD_INFORMATION_TYPE:
      return {
        ...state,
        result: {
          ...state.result,
          content: [
            {
              informationTypeId: -1,
              name: null,
              description: null,
              category: null,
              producer: null,
              system: null,
              personalData: null,
              isOpen: true,
              isEdit: true,
              isAdd: true
            }
          ].concat(state.result.content)
        }
      };
    case DataActionTypes.SAVE_INFORMATION_TYPE_REQUEST:
      return {
        ...state,
        result: {
          ...state.result,
          content: [{ ...state.result.content[0], pending: true }].concat(
            state.result.content.slice(1)
          )
        }
      };
    case DataActionTypes.SAVE_INFORMATION_TYPE_SUCCESS:
      return {
        ...state,
        result: {
          ...state.result,
          content: [
            { ...action.payload.result, error: undefined, pending: false }
          ].concat(state.result.content.slice(1))
        }
      };
    case DataActionTypes.SAVE_INFORMATION_TYPE_FAILURE:
      return {
        ...state,
        result: {
          ...state.result,
          content: [
            { ...state.result.content[0], error: action.payload.error, pending: false }
          ].concat(state.result.content.slice(1))
        }
      };
    case DataActionTypes.TOGGLE_ROW:
      return {
        ...state,
        result: {
          ...state.result,
          content: state.result.content.map((e: InformationTypeView) => {
            if (e.informationTypeId === action.payload.informationTypeId) {
              return {
                ...e,
                isOpen: !e.isOpen
              };
            }
            return e;
          })
        }
      };
    case DataActionTypes.TOGGLE_ROW_POLICY:
      return {
        ...state,
        result: {
          ...state.result,
          content: state.result.content.map((e: InformationTypeView) => {
            if (e.informationTypeId === action.payload.informationTypeId) {
              return {
                ...e,
                policy: {
                  ...e.policy,
                  result: {
                    currentPage:
                      e.policy && e.policy.result ? e.policy.result.currentPage : 0,
                    pageSize: e.policy && e.policy.result ? e.policy.result.pageSize : 20,
                    totalElements:
                      e.policy && e.policy.result ? e.policy.result.totalElements : 0,
                    content:
                      e.policy && e.policy.result && e.policy.result.content
                        ? e.policy.result.content.map((p: Policy) => {
                            if (p.policyId === action.payload.policyId) {
                              return {
                                ...p,
                                isOpen: !p.isOpen
                              };
                            }
                            return p;
                          })
                        : []
                  }
                }
              };
            }
            return e;
          })
        }
      };
    case DataActionTypes.TOGGLE_EDIT_VIEW:
      return {
        ...state,
        result: {
          ...state.result,
          content: state.result.content.map((e: InformationTypeView) => {
            if (e.informationTypeId === action.payload.informationTypeId) {
              return {
                ...e,
                isEdit: !e.isEdit
              };
            }
            return e;
          })
        }
      };
    case DataActionTypes.FETCH_POLICY_FOR_INFORMATION_TYPE_REQUEST:
      return {
        ...state,
        result: {
          ...state.result,
          content: state.result.content.map((e: InformationTypeView) => {
            if (e.informationTypeId === action.payload.informationTypeId) {
              return {
                ...e,
                policy: { pending: true }
              };
            }
            return e;
          })
        }
      };
    case DataActionTypes.FETCH_POLICY_FOR_INFORMATION_TYPE_SUCCESS:
      return {
        ...state,
        result: {
          ...state.result,
          content: state.result.content.map((e: InformationTypeView) => {
            if (e.informationTypeId === action.payload.informationTypeId) {
              return {
                ...e,
                policy: {
                  result: action.payload.result,
                  error: undefined,
                  pending: false,
                  previousQuery: action.payload.previousQuery
                }
              };
            }
            return e;
          })
        }
      };
    case DataActionTypes.FETCH_POLICY_FOR_INFORMATION_TYPE_FAILURE:
      return {
        ...state,
        result: {
          ...state.result,
          content: state.result.content.map((e: InformationTypeView) => {
            if (e.informationTypeId === action.payload.informationTypeId) {
              return {
                policy: { result: [], error: action.payload.error, pending: false }
              };
            }
            return e;
          })
        }
      };
    default:
      return state;
  }
};

export { reducer as dataReducer };
