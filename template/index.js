/**
 * @format
 */
import 'react-native-gesture-handler';

import React from 'react';
import {AppRegistry, LogBox} from 'react-native';
import {name as appName} from './app.json';
import {Provider} from 'react-redux';
import {store, persistor} from '@shared-state';
import {PersistGate} from 'redux-persist/integration/react';
import App from './App';
import {load} from './src/bootstrap';
const onBeforeLift = async () => await load();

const root = () => {
  return (
    <Provider store={store}>
      <PersistGate onBeforeLift={onBeforeLift} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  );
};

AppRegistry.registerComponent(appName, () => root);
LogBox.ignoreAllLogs(true);
