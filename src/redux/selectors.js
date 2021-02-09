import { createSelector } from '@reduxjs/toolkit';

const getEntities = state => state.contacts.entities;
const getFilter = state => state.contacts.filter;

const getFilterContacts = createSelector(
  [getEntities, getFilter],
  (contacts, filter) => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  },
);

export { getEntities, getFilter, getFilterContacts };
