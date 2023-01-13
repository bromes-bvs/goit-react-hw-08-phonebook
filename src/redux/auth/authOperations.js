import { createAsyncThunk } from '@reduxjs/toolkit';
import * as SwaggerAPI from 'components/service/SwaggerAPI';

export const registerOperation = createAsyncThunk(
  'user/register',
  async (user, { rejectWithValue }) => {
    try {
      const newUser = await SwaggerAPI.register(user);
      return newUser;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const loginOperation = createAsyncThunk(
  'user/login',
  async (user, { rejectWithValue }) => {
    try {
      const contacts = await SwaggerAPI.login(user);
      return contacts;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const logoutOperation = createAsyncThunk(
  'user/logout',
  async (_, { rejectWithValue }) => {
    try {
      const contacts = await SwaggerAPI.logout();
      return contacts;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
