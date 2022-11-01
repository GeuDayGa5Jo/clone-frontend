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
    const { id } = params;
    console.log("id=>", id);
    try {
      const response = await delBoardContentApi(id);
      return thunkAPI.fulfillWithValue(id);
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

      state.boardContent = action.payload;
    },
    [getBoardContent.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const {} = BoardContentSlice.actions;
export default BoardContentSlice.reducer;
