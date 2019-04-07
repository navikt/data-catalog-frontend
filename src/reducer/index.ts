import { combineReducers } from 'redux';
import { connectRouter, RouterState } from 'connected-react-router';
import { History } from 'history';
import { dataReducer } from '../pages/dataCatalog/reducer';
import { DataState } from '../pages/dataCatalog/types';
import configReducer from '../config/configReducer';

export interface AppState {
  router: RouterState;
  dataCatalog: DataState;
}

const reducers = {
  config: configReducer,
  dataCatalog: dataReducer
};

export default (history: History) =>
  combineReducers<AppState>({
    router: connectRouter(history),
    ...reducers
  });
