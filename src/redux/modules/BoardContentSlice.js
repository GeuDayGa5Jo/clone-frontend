import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { addBoardContentApi } from "./API/BoardContentAPI";
import { ServerUrl } from "../../server";

const initialState = {
  boardContent: [],
  isLoading: false,
  error: null,
};

// export const __addBoardThunk = createAsyncThunk(
//   "addBoardContent",
//   async (payload, thunkAPI) => {
//     const accessToken = localStorage.getItem("Authorization");
//     const refreshToken = localStorage.getItem("Refresh-Token");

//     const frm = new FormData();

//     console.log(payload.boardContent);
//     frm.append("content", payload.boardContent);
//     frm.append("file", payload.imageFile);
//     console.log(frm);

//     try {
//       const { data } = await axios.post(
//         "http://13.124.191.202:8080/auth/boards/create",
//         frm,
//         {
//           headers: {
//             Authorization: accessToken,
//             "Content-Type": "multipart/form-data",
//             // "Content-Type": "application/json",
//           },
//         }
//       );
//       console.log(data);
//       return thunkAPI.fulfillWithValue(data);
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error);
//     }
//   }
// );

// export const addBoardContent = async (payload) => {
//   const accessToken = localStorage.getItem("Authorization");
//   const refreshToken = localStorage.getItem("Refresh-Token");

//   const frm = new FormData();
//   frm.append("content", payload.boardContent);
//   frm.append("file", payload.imageFile);
//   console.log(frm);
//   try {
//     const { data } = await axios.post(
//       "http://13.124.191.202:8080/auth/boards/create",
//       frm,
//       {
//         headers: {
//           Authorization: accessToken,
//           "Content-Type": "multipart/form-data",
//           // "Content-Type": "application/json",
//         },
//       }
//     );
//     console.log(data);
//   } catch (e) {
//     console.log(e);
//   }
// };

export const BoardContentSlice = createSlice({
  name: "boardContent",
  initialState,
  reducers: {},
  extraReducers: {
    // [addBoardContent.pending]: (state) => {
    //   state.isLoading = true;
    // },
    // [addBoardContent.fulfilled]: (state, action) => {
    //   state.isLoading = false;
    //   console.log("post 액션 페이로드=>", action.payload);
    //   state.content.push(action.payload);
    // },
    // [addBoardContent.rejected]: (state, action) => {
    //   state.isLoading = false;
    //   state.error = action.payload;
    // },
    // [__addBoardThunk.pending]: (state) => {
    //   state.isLoading = true;
    // },
    // [__addBoardThunk.fulfilled]: (state, action) => {
    //   state.isLoading = false;
    //   console.log("post 액션 페이로드=>", action.payload);
    //   state.content.push(action.payload);
    // },
    // [__addBoardThunk.rejected]: (state, action) => {
    //   state.isLoading = false;
    //   state.error = action.payload;
    // },
  },
});

export const {} = BoardContentSlice.actions;
export default BoardContentSlice.reducer;
