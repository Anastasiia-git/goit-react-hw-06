import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  contacts: [],
};

const slice = createSlice({
  name: "contactsList",
  initialState,
  reducers: {
    addContact: (state, action) => {
      state.contacts.push(action.payload);
    },
    deleteContact: (state, action) => {
      state.contacts = state.contacts.filter(
        (item) => item.id !== action.payload
      );
    },
  },
});

export const { addContact,  deleteContact } = slice.actions;
export const contactsReducer = slice.reducer;