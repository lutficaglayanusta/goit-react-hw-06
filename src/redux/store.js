import { configureStore } from "@reduxjs/toolkit";
import contactReducer from "./contactsSlice.js"

export const store = configureStore({
  reducer: {
    contacts:contactReducer
  },
});