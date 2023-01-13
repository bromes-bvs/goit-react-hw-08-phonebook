import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from 'redux/auth/authSlice';
import { contactsReducer } from './contactsSlice';
import { filterReducer } from './filterSlice';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
    users: authReducer,
  },
});
