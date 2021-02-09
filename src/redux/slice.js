import { createSlice } from '@reduxjs/toolkit';
import contactsOperations from './operations';
import changeFilter from './actions';

const initialState = {
  entities: [],
  filter: '',
  isLoading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: {
    [changeFilter](state, { payload }) {
      state.filter = payload;
    },
    [contactsOperations.getContacts.fulfilled](state, { payload }) {
      state.entities = payload;
      state.isLoading = false;
    },
    [contactsOperations.addContact.fulfilled](state, { payload }) {
      state.entities = [...state.entities, payload];
      state.isLoading = false;
    },
    [contactsOperations.deleteContact.fulfilled](state, action) {
      state.entities = state.entities.filter(
        ({ id }) => id !== action.meta.arg,
      );
      state.isLoading = false;
    },
  },
});

export default contactsSlice.reducer;
