/**
 * @format
 */

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
  isAuthenticated: boolean;
  accessToken: string;
  refreshToken: string;
}

const initialState: AuthState = {
  isAuthenticated: false,
  accessToken: '',
  refreshToken: '',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuth: (
      state,
      action: PayloadAction<{
        isAuthenticated: boolean;
        accessToken?: string;
        refreshToken?: string;
      }>,
    ) => {
      state.isAuthenticated = action.payload.isAuthenticated;
      state.accessToken = action.payload.accessToken || '';
      state.refreshToken = action.payload.refreshToken || '';
    },
  },
});

export const { setAuth } = authSlice.actions;
export default authSlice.reducer;
