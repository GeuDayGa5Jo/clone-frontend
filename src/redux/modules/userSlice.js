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
      return thunkAPI.fulfillWithValue(res.data);
    } catch (e) {
      // 에러가 발생할경우 alert로 백엔드에서 전송한 메시지를 띄워주어 멈추게 한다.
      //중복된 아이디 입니다.
      // alert(e["response"].data);

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
      // alert(e.response.data.errorMessage);
      return thunkAPI.rejectWithValue(e.response.data.errorMessage);
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
    clearUserState: (state, action) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.error = null;
    },
  },
  extraReducers: {
    // 회원가입
    [__signUpThunk.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.user = action.payload;
      state.error = null;
      state.isSuccess = true;
    },
    [__signUpThunk.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
      state.isSuccess = true;
    },
    [__signUpThunk.pending]: (state) => {
      state.isLoading = true;
      state.error = null;
      state.isSuccess = false;
    },

    //로그인
    [__loginThunk.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.user = action.payload;
      state.error = null;
      state.isSuccess = true;
    },
    [__loginThunk.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
      state.isSuccess = true;
    },
    [__loginThunk.pending]: (state) => {
      state.isLoading = true;
      state.error = null;
      state.isSuccess = false;
    },
  },
});

export const { clearUserState } = userSlice.actions;
export default userSlice.reducer;
