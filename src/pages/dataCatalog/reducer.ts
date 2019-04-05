import { Reducer } from 'redux';

import { DataActions, DataActionTypes, DataState, InformationType } from './types';

export const initialState: DataState = {
  result: {
    currentPage: 0,
    pageSize: 6,
    totalPages: 10,
    totalElements: 55,
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
        result: { ...state.result, content: action.payload.result },
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
          content: state.result.content.map((e: InformationType) => {
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
