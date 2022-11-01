import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ServerUrl } from "../../server";
import { userApis } from "./API/UserAPI";

export const __signUpThunk = createAsyncThunk(
  "SIGN_UP",
  async (payload, thunkAPI) => {
    try {
      const res = await userApis.signup(payload);
      console.log(res);
      alert(["response"].data);
      return thunkAPI.fulfillWithValue(res.data);
    } catch (e) {
      //중복된 아이디 입니다.
      alert(e["response"].data);

      return thunkAPI.rejectWithValue(e["response"].data);
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
    // 회원가입
    [__signUpThunk.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.user = action.payload;
      state.error = null;
    },
    [__signUpThunk.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [__signUpThunk.pending]: (state) => {
      state.isLoading = true;
      state.error = null;
    },

    //로그인
    [__loginThunk.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.user = action.payload;
    },
    [__loginThunk.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [__loginThunk.pending]: (state) => {
      state.isLoading = true;
    },
  },
});

export const { clearTodo } = userSlice.actions;
export default userSlice.reducer;
