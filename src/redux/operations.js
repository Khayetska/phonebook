import { createAsyncThunk } from '@reduxjs/toolkit';
import { deleteContactByID, getContacts, postContact } from 'services/api';

export const fetchContacts = createAsyncThunk('contacts/fetchAll', () => {
  return getContacts();
});

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async newContact => {
    return postContact(newContact);
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async id => {
    return deleteContactByID(id);
  }
);
