import {
  configureStore,
  createSlice,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
import boardContent from "../modules/BoardContentSlice";
import user from "../modules/userSlice";
import myPage from "../modules/mypageSlice";

export const store = configureStore({
  reducer: { boardContent, user, myPage },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});
