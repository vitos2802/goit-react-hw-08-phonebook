import { createReducer, combineReducers } from '@reduxjs/toolkit';
import actions from './actions';
import contactsOperations from './operations';

const entities = createReducer([], {
  [contactsOperations.getContacts.fulfilled]: (_, { payload }) => payload,

  [contactsOperations.addContact.fulfilled]: (state, { payload }) => [
    ...state,
    payload,
  ],
  [contactsOperations.deleteContact.fulfilled]: (state, action) => {
    return state.filter(({ id }) => id !== action.meta.arg);
  },
});

const filter = createReducer('', {
  [actions.changeFilter]: (_, { payload }) => payload,
});

export default combineReducers({
  entities,
  filter,
});
