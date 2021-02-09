import { createAsyncThunk } from '@reduxjs/toolkit';
import phonebookApi from '../services/phonebookApi';

const getContacts = createAsyncThunk(
  'contacts/getContacts',
  async (_, { rejectWithValue }) => {
    try {
      const contacts = await phonebookApi.fetchContacts();
      return contacts;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

const addContact = createAsyncThunk(
  'contacts/addContact',
  async ({ name, number }, { rejectWithValue }) => {
    try {
      const data = await phonebookApi.addContact({ name, number });
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);

const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, { rejectWithValue }) => {
    try {
      await phonebookApi.deleteContact(id);
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);

const operations = { getContacts, addContact, deleteContact };

export default operations;
