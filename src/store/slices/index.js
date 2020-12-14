import {combineReducers} from '@reduxjs/toolkit';

import featureReducer from './featureSlice';
import authReducer from './authSlice';

const allReducers = combineReducers({
  featureReducer,
  authReducer,
});

export default allReducers;
