import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { isDev, serverUrl } from ".";

export const __signUpThunk = createAsyncThunk(
  "SIGN_UP",
  async (arg, thunkAPI) => {
    try {
      const { data } = await axios.post(`${serverUrl}/todos`, arg);
      console.log(data);
      return thunkAPI.fulfillWithValue(data);
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
