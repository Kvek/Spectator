import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

import logger from 'redux-logger';

import monitorReducerEnhancer from 'redux/enhancers/monitorReducer';
import rootReducer from 'redux/rootReducer';

export default function configureAppStore() {
  const store = configureStore({
    reducer: rootReducer,
    middleware: [logger, ...getDefaultMiddleware()],
    enhancers: [monitorReducerEnhancer]
  });

  return store;
}

export const store = configureAppStore();
