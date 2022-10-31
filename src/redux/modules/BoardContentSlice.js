import { createAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { addBoardContentApi } from "./API/BoardContentAPI";
import { ServerUrl } from "../../server";

const initialState = {
  boardContent: [],
  isLoading: false,
  error: null,
};

export const addBoardContent = async (payload) => {
  console.log("paylod console.log=>", payload);

  const frm = new FormData();
  frm.append("boardContent", payload.boardContent);
  frm.append("imageFile", payload.imageFile);

  console.log("frm console.log=>", frm);

  await axios
    .post(`${ServerUrl}/auth/boards/create`, frm, {
      headers: {
        "X-AUTH-TOKEN": localStorage.getItem("accessToken"),
        "Content-Type": "multipart/form-data",
        "Content-Type": "application/json",
      },
    })
    .then(function a(response) {
      alert("게시되었습니다.");
      window.location.replace("/");
    })
    .catch(function (error) {
      console.log(error);
    });
};

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
  },
});

export const {} = BoardContentSlice.actions;
export default BoardContentSlice.reducer;
