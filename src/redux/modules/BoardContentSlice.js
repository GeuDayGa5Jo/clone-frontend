import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { delBoardContentApi, getBoardContentApi } from "./API/BoardContentAPI";
import { ServerUrl } from "../../server";
import { useParams } from "react-router-dom";

const initialState = {
  boardContent: [],
  isLoading: false,
  error: null,
};

export const getBoardContent = createAsyncThunk(
  "get/getBoardContent",
  async (payload, thunkAPI) => {
    try {
      const res = await getBoardContentApi();
      // window.location.reload();
      console.log("res=>", res);
      return thunkAPI.fulfillWithValue(res);
    } catch (err) {
      console.log("error");
      return thunkAPI.rejectWithValue(err);
    }
  }
);

export const delBoardContent = createAsyncThunk(
  "post/delComment",
  async (params, thunkAPI) => {
    try {
      const response = await delBoardContentApi(params);
      return thunkAPI.fulfillWithValue(params);
    } catch (err) {
      console.log("error ::::::", err.response);
      return thunkAPI.rejectWithValue("<<", err);
    }
  }
);

export const BoardContentSlice = createSlice({
  name: "boardContent",
  initialState,
  reducers: {},
  extraReducers: {
    //GET Comments
    [getBoardContent.pending]: (state) => {
      state.isLoading = true;
    },
    [getBoardContent.fulfilled]: (state, action) => {
      state.isLoading = false;
      console.log("get action => ", action.payload);
      state.boardContent = action.payload;
    },
    [getBoardContent.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    //삭제
    [delBoardContent.pending]: (state) => {
      state.isLoading = true;
    },
    [delBoardContent.fulfilled]: (state, action) => {
      state.isLoading = false;
      console.log("del action => ", action.payload);
      state.boardContent = state.boardContent.filter(
        (content) => content.id !== action.payload
      );
    },
    [delBoardContent.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const {} = BoardContentSlice.actions;
export default BoardContentSlice.reducer;
