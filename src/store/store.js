import { configureStore } from "@reduxjs/toolkit";
import { githubServiceApi } from "../service/GithubService";
import { setupListeners } from "@reduxjs/toolkit/query";

export const store = configureStore({
  reducer: {
    [githubServiceApi.reducerPath]: githubServiceApi.reducer,
  },
  middleware: (curryGetDefaultMiddleware) =>
    curryGetDefaultMiddleware().concat(githubServiceApi.middleware),
});

setupListeners(store.dispatch);
