import { combineReducers } from 'redux';
import { connectRouter, RouterState } from 'connected-react-router';
import { History } from 'history';
import { dataReducer } from '../pages/mainPage/reducer';
import { DataState } from '../pages/mainPage/types';
import configReducer from '../config/configReducer';

export interface AppState {
  router: RouterState;
  mainPage: DataState;
}

const reducers = {
  config: configReducer,
  mainPage: dataReducer
};

export default (history: History) =>
  combineReducers<AppState>({
    router: connectRouter(history),
    ...reducers
  });
