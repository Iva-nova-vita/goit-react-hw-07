import { createSelector } from "@reduxjs/toolkit";
import { selectTextFilter } from "./filtersSlice";
import { selectContacts } from "./contactsSlice";


export const selectFilteredContacts = createSelector(
  [selectContacts, selectTextFilter],
  (contacts, textFilter) => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(textFilter.toLowerCase())
    );
  }
);

