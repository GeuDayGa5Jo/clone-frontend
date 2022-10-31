import {
  configureStore,
  createSlice,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
import boardContent from "../modules/BoardContentSlice";
import user from "../modules/userSlice";

export const store = configureStore({
  reducer: { boardContent, user },
  // middleware: getDefaultMiddleware({
  //   serializableCheck: false,
  // }),
});
