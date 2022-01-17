/**
 * @format
 */

import { combineReducers } from '@reduxjs/toolkit';
import authSlice from '../features/Authentication/authSlice';

const rootReducer = combineReducers({
  auth: authSlice,
});

export default rootReducer;
