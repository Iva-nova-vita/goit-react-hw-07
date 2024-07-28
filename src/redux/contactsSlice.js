import { createSlice, nanoid } from '@reduxjs/toolkit';
import { fetchContacts } from './contactsOps';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  reducers: {
    addContact: {
      reducer(state, action) {
        state.items.push(action.payload);
      },
      prepare({ name, phone }) {
        return {
          payload: {
            name,
            phone,
            id: nanoid(),
          },
        };
      },
    },
    deleteContact(state, action) {
      const index = state.items.findIndex(
        (contact) => contact.id === action.payload
      );
      state.items.splice(index, 1);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.items = action.payload;
        state.loading = false;
      })
      .addCase(fetchContacts.rejected, (state) => {
        state.loading = false;
        state.error = true;
      });
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
