import { Reducer } from 'redux';

import { DataActions, DataActionTypes, DataState } from './types';

const initialState = {};

const reducer: Reducer<DataState, DataActions> = (state = initialState, action) => {
  switch (action.type) {
    case DataActionTypes.FETCH_DATA_REQUEST:
      return {
        ...state,
        isPending: true,
        error: undefined,
        data: []
      };
    case DataActionTypes.FETCH_DATA_SUCCESS:
      return {
        ...state,
        data: action.payload.data,
        error: undefined,
        isPending: false
      };
    case DataActionTypes.FETCH_DATA_FAILURE:
      return {
        ...state,
        data: [],
        error: action.payload.error,
        isPending: false
      };
    default:
      return state;
  }
};

export { reducer as dataReducer };
