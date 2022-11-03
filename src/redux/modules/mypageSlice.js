import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";
import { useParams } from "react-router-dom";
import { getMyPageApi } from "./API/MyPageApi";

const initialState = {
  myPage: [],
  profileImgs: {},
  isLoading: false,
  error: null,
};

export const getMyPage = createAsyncThunk(
  "get/getMyPage",
  async (payload, thunkAPI) => {
    try {
      const res = await getMyPageApi();
      console.log("res에서 무얼 받고 있을까요?", res);
      return thunkAPI.fulfillWithValue(res);
    } catch (err) {
      console.log("error");
      return thunkAPI.rejectWithValue(err);
    }
  }
);

export const BoardContentSlice = createSlice({
  name: "myPage",
  initialState,
  reducers: {
    changeImg: (state, action) => {
      console.log(action.payload);
      state.profileImgs = action.payload;
    },
  },
  extraReducers: {
    //GET Comments
    [getMyPage.pending]: (state) => {
      state.isLoading = true;
    },
    [getMyPage.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.myPage = action.payload;
      // console.log("get myPage state => ", action.payload);
    },
    [getMyPage.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { changeImg } = BoardContentSlice.actions;
export default BoardContentSlice.reducer;
