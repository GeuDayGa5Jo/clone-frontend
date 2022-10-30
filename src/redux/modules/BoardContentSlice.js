import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { addBoardContentApi } from "./API/BoardContentAPI";

const initialState = {
  boardContent: [],
  isLoading: false,
  error: null,
};

export const addBoardContent = createAsyncThunk(
  "post/addBoardContent",
  async (payload, thunkAPI) => {
    console.log("payload 콘솔로그 =>", payload);
    try {
      await addBoardContentApi(payload);
      return thunkAPI.fulfillWithValue(payload);
    } catch (err) {
      console.log("error");
      return thunkAPI.rejectWithValue(err);
    }
  }
);

export const BoardContentSlice = createSlice({
  name: "boardContent",
  initialState,
  reducers: {},
  extraReducers: {
    [addBoardContent.pending]: (state) => {
      state.isLoading = true;
    },
    [addBoardContent.fulfilled]: (state, action) => {
      state.isLoading = false;
      console.log("post 액션 페이로드=>", action.payload);
      state.content.push(action.payload);
    },
    [addBoardContent.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const {} = BoardContentSlice.actions;
export default BoardContentSlice.reducer;
