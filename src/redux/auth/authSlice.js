import { createSlice } from '@reduxjs/toolkit';
import {
  loginOperation,
  logoutOperation,
  registerOperation,
} from './authOperations';

const initial = {
  user: { email: null, name: null },
  token: null,
  isLoggedIn: false,
};

export const authSlice = createSlice({
  name: 'users',
  initialState: initial,
  extraReducers: {
    [registerOperation.fulfilled]: (state, { payload }) => {
      state.token = payload.token;
      state.user.email = payload.user.email;
      state.user.name = payload.user.name;
      state.isLoggedIn = true;
    },
    [loginOperation.fulfilled]: (state, { payload }) => {
      state.token = payload.token;
      state.user.email = payload.user.email;
      state.user.name = payload.user.name;
      state.isLoggedIn = true;
    },
    [logoutOperation.fulfilled]: state => {
      // state = initial ???
      return { ...initial };
    },
  },
});

export const authReducer = authSlice.reducer;
