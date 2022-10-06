import {
  configureStore,
  combineReducers,
  getDefaultMiddleware,
} from '@reduxjs/toolkit';

import {authenticationSlice, taskSlice} from './slice';

import logger from 'redux-logger';

const reducer = combineReducers({
  task: taskSlice,
  authentication: authenticationSlice,
});
export const store = configureStore({
  reducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
});
