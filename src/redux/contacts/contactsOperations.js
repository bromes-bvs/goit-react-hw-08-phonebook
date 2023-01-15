import { createAsyncThunk } from '@reduxjs/toolkit';
import * as SwaggerAPI from 'components/service/SwaggerAPI';

export const fetchOperation = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, { rejectWithValue }) => {
    try {
      const contacts = await SwaggerAPI.fetchContacts();
      return contacts;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const postOperation = createAsyncThunk(
  'contacts/postContacts',
  async (newContact, { rejectWithValue }) => {
    try {
      const contact = await SwaggerAPI.postContact(newContact);
      return contact;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteOperation = createAsyncThunk(
  'contacts/deleteContacts',
  async (id, { rejectWithValue }) => {
    try {
      const contact = await SwaggerAPI.deleteContact(id);
      return contact;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// export const simpleOperation = createAsyncThunk(
//   'contacts/fetchContacts',
//   async () => {
//     const contacts = await SwaggerAPI.fetchContacts();
//     return contacts;
//   }
// );
