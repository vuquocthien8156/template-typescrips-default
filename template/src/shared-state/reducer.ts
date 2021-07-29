import {combineReducers} from 'redux';
import {systemsReducer} from './reducers';
export const rootReducer = combineReducers({
  systems: systemsReducer,
});
