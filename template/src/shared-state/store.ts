import {configureStore} from '@reduxjs/toolkit';
import logger from 'redux-logger';
import AsyncStorage from '@react-native-community/async-storage';
import {rootReducer} from './reducer';
import {persistStore, persistReducer} from 'redux-persist';
import {createWhitelistFilter} from 'redux-persist-transform-filter';
import {createEpicMiddleware} from 'redux-observable';
import {rootEpics} from './epic';
const epicMiddleware = createEpicMiddleware();
const devices = createWhitelistFilter('devices', [
  'token',
  'refreshToken',
  'deviceId',
]);
const systems = createWhitelistFilter('systems', ['language', 'mode']);
const persistConfig = {
  key: 'root',
  blacklist: [],
  transforms: [devices, systems],
  storage: AsyncStorage,
  timeout: 0,
};
const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = configureStore({
  reducer: persistedReducer,
  middleware: [epicMiddleware, logger],
  devTools: false,
});
epicMiddleware.run(rootEpics);

export const persistor = persistStore(store);
