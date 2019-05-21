import { Reducer } from 'redux';

import { DataActions, DataActionTypes, DataState, InformationTypeView } from './types';

export const initialState: DataState = {
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

const reducer: Reducer<any, DataActions> = (state = initialState, action) => {
  switch (action.type) {
    case DataActionTypes.FETCH_DATA_REQUEST:
      return {
        ...state,
        pending: true
      };
    case DataActionTypes.FETCH_DATA_SUCCESS:
      return {
        ...state,
        result: action.payload.result,
        error: undefined,
        pending: false,
        previousQuery: action.payload.previousQuery
      };
    case DataActionTypes.FETCH_DATA_FAILURE:
      return {
        ...state,
        result: [],
        error: action.payload.error,
        pending: false
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
                isOpen: !e.isOpen
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
