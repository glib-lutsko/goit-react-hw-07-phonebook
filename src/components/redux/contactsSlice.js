import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  addContactsThunk,
  deleteContactsThunk,
  getRequestContacts,
} from './contactsThunk';

const handlePending = state => {
  state.isLoading = true;
};

const handleReject = (state, { payload }) => {
  state.error = payload;
};

const contactsSlice = createSlice({
  name: 'contacts',

  initialState: {
    items: [],
    isLoading: false,
    error: null,
    filter: '',
  },

  extraReducers: builder => {
    builder
      .addCase(getRequestContacts.fulfilled, (state, { payload }) => {
        state.items = payload;
        state.isLoading = false;
      })
      .addCase(addContactsThunk.fulfilled, (state, { payload }) => {
        state.items = [payload, ...state.items];
        state.isLoading = false;
      })
      .addCase(deleteContactsThunk.fulfilled, (state, { payload }) => {
        state.items = state.items.filter(item => item.id !== payload.id);
        state.isLoading = false;
      })
      .addMatcher(
        isAnyOf(
          getRequestContacts.pending,
          addContactsThunk.pending,
          deleteContactsThunk.pending
        ),
        handlePending
      )
      .addMatcher(
        isAnyOf(
          getRequestContacts.rejected,
          addContactsThunk.rejected,
          deleteContactsThunk.rejected
        ),
        handleReject
      );
  },
});

export const { addContactsAction, deleteContactsAction } =
  contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;
