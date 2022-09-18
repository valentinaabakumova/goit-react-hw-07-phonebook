import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

export const contactsSlise = createSlice({
  name: 'contacts',
  initialState: [
    { id: 'id-1', name: 'Someone', number: '888-88-88' },
    { id: 'id-2', name: 'My love', number: '777-77-77' },
    { id: 'id-3', name: 'You', number: '666-66-66' },
    { id: 'id-4', name: 'Me', number: '444-44-44' },
  ],
  reducers: {
    addContact: {
      reducer: (store, { payload }) => {
        store.push(payload);
      },

      prepare: data => {
        return {
          payload: {
            ...data,
            id: nanoid(),
          },
        };
      },
    },
    deleteContact: (store, action) =>
      store.filter(contact => contact.id !== action.payload),
  },
});

export const filterSlise = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    filterContact: (_, { payload }) => payload,
  },
});

export const { addContact, deleteContact } = contactsSlise.actions;
export const { filterContact } = filterSlise.actions;
