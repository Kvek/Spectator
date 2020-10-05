import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

import rootReducer from 'redux/rootReducer';

export default function configureAppStore() {
  const store = configureStore({
    reducer: rootReducer,
    middleware: [...getDefaultMiddleware()],
    enhancers: []
  });

  return store;
}

export const store = configureAppStore();
