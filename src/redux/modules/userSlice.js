import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { ServerUrl } from "../../server";
import { userApis } from "./API/UserAPI";

export const __signUpThunk = createAsyncThunk(
  "SIGN_UP",
  async (payload, thunkAPI) => {
    try {
      const { data } = await userApis.signup(payload);
      console.log(payload);
      console.log(data);
      return thunkAPI.fulfillWithValue(data);
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);
// password1!
export const __loginThunk = createAsyncThunk(
  "LOGIN",
  async (payload, thunkAPI) => {
    try {
      const res = await userApis.login(payload);
      localStorage.setItem("Authorization", res.headers.authorization);
      localStorage.setItem("Refresh-Token", res.headers["Refresh-Token"]);
      console.log(res.data);
      return thunkAPI.fulfillWithValue(res.data);
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);
const initialState = {
  user: {},
  error: null,
  isLoading: false,
  isSuccess: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    // clearTodo: (state, action) => {
    //   state.isSuccess = false;
    // },
  },
  extraReducers: {
    // [__getTodosThunk.fulfilled]: (state, action) => {
    //   state.isLoading = false;
    //   state.todos = action.payload;
    // },
    // [__getTodosThunk.rejected]: (state, action) => {
    //   state.isLoading = false;
    //   state.error = action.payload;
    // },
    // [__getTodosThunk.pending]: (state) => {
    //   state.isLoading = true;
    // },
  },
});

export const { clearTodo } = userSlice.actions;
export default userSlice.reducer;
