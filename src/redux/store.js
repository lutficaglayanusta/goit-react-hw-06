import { configureStore } from "@reduxjs/toolkit";
import contactReducer from "./contactsSlice.js"
import filterReducer from "./filtersSlice.js"

export const store = configureStore({
  reducer: {
    contacts: contactReducer,
    filters:filterReducer
  },
});