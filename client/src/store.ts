import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { signInApi } from "~/pages/SignIn/api/signInApi";

export const store = configureStore({
  reducer: {
    [signInApi.reducerPath]: signInApi.reducer,
  },
  middleware: (getDefaultMiddleWare) =>
    getDefaultMiddleWare().concat(signInApi.middleware),
});

setupListeners(store.dispatch);
