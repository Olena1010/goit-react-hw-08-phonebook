import { createSelector } from '@reduxjs/toolkit';

export const selectIsLoading = state => state.contacts.isLoading;

export const selectError = state => state.contacts.error;

export const selectContacts = state => state.contacts.items;

export const selectFilter = state => state.filters.filterValue;

export const selectVisibleContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filterValue) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterValue.toLowerCase())
    );
  }
);
