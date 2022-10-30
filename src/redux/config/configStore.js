import {
  configureStore,
  createSlice,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
import boardContent from "../modules/BoardContentSlice";

export const store = configureStore({
  reducer: { boardContent },
  // middleware: getDefaultMiddleware({
  //   serializableCheck: false,
  // }),
});
