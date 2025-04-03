import { configureStore } from "@reduxjs/toolkit";
import { persistStore } from "redux-persist";
import contactsReducer from "./contactsSlice";
import filtersReducer from "./filtersSlice";

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filters: filtersReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // ВИМКНЕННЯ ПЕРЕВІРКИ СЕРІАЛІЗОВАНИХ ДАНИХ
    }),
});

export const persistor = persistStore(store);