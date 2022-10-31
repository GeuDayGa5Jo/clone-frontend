import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";
import axios from "axios";
import { addBoardContentApi, getBoardContentApi } from "./API/BoardContentAPI";
import { ServerUrl } from "../../server";

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
      console.log("get res=>", res);
      return thunkAPI.fulfillWithValue(res);
    } catch (err) {
      console.log("error");
      return thunkAPI.rejectWithValue(err);
    }
  }
);

// export const delBoardContent = createAsyncThunk(
//   "post/delComment",
//   async (payload, thunkAPI) => {
//     console.log(payload);
//     try {
//       const response = await delCommentAPI(payload);
//       window.location.reload();
//       return thunkAPI.fulfillWithValue(payload);
//     } catch (err) {
//       console.log("error ::::::", err.response);
//       return thunkAPI.rejectWithValue("<<", err);
//     }
//   }
// );

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
      console.log("get action.payload=>", action.payload);
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
