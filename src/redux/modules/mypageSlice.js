import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";
import { useParams } from "react-router-dom";
import { getMyPageApi } from "./API/MyPageApi";

const initialState = {
  boardContent: [],
  isLoading: false,
  error: null,
};

export const getMyPage = createAsyncThunk(
  "get/getMyPage",
  async (payload, thunkAPI) => {
    try {
      const res = await getMyPageApi();
      return thunkAPI.fulfillWithValue(res);
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
    //GET Comments
    [getMyPage.pending]: (state) => {
      state.isLoading = true;
    },
    [getMyPage.fulfilled]: (state, action) => {
      state.isLoading = false;
      console.log("get myPage action => ", action.payload);
      state.boardContent = action.payload;
    },
    [getMyPage.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const {} = BoardContentSlice.actions;
export default BoardContentSlice.reducer;
