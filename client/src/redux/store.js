import { configureStore } from "@reduxjs/toolkit";
import cardsReducer from "./features/cardSlice";
import { newsApi } from "./api/newsApi.js";

export const store = configureStore({
  reducer: {
    [newsApi.reducerPath]: newsApi.reducer,
    card: cardsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(newsApi.middleware),
});
