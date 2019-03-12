import { combineReducers } from 'redux';
import { connectRouter, RouterState } from 'connected-react-router';
import { History } from 'history';

import configReducer from '../config/configReducer';

export interface AppState {
  router: RouterState;
}

const reducers = {
  config: configReducer
};

export default (history: History) =>
  combineReducers<AppState>({
    router: connectRouter(history),
    ...reducers
  });
