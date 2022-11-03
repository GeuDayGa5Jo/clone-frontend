import { createSlice, createAsyncThunk, current } from "@reduxjs/toolkit";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ServerUrl } from "../../server";
import { commentApis, delCommentApi } from "./API/CommentAPI";
import { userApis } from "./API/UserAPI";

export const __addCommentThunk = createAsyncThunk(
  "ADD_COMMENT",
  async ({ commentContent, boardId }, thunkAPI) => {
    try {
      console.log(commentContent, boardId);
      const res = await commentApis.addComment(commentContent, boardId);
      window.location.reload(0);
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

export const delComment = createAsyncThunk(
  "post/delComment",
  async (payload, thunkAPI) => {
    console.log("payload=>", payload);
    try {
      const response = await delCommentApi(payload);
      console.log("del response=>", response);
      window.location.reload();
      return thunkAPI.fulfillWithValue(response);
    } catch (err) {
      console.log("error ::::::", err.response);
      return thunkAPI.rejectWithValue("<<", err);
    }
  }
);

const initialState = {
  user: {},
  error: null,
  isLoading: false,
  isSuccess: false,
};

export const commentSlice = createSlice({
  name: "comment",
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
    [__addCommentThunk.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.comment = action.payload;
      state.error = null;
      state.isSuccess = true;
    },
    [__addCommentThunk.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
      state.isSuccess = true;
    },
    [__addCommentThunk.pending]: (state) => {
      state.isLoading = true;
      state.error = null;
      state.isSuccess = false;
    },

    [delComment.pending]: (state) => {
      state.isLoading = true;
    },
    [delComment.fulfilled]: (state, action) => {
      state.isLoading = false;
      // content.commentId !== action.payload
      console.log("comment 나와=>", current(state.comment));
      state.comment = state.comment.filter(
        (content) => content.commentId !== action.payload
      );
    },
    [delComment.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const {} = commentSlice.actions;
export default commentSlice.reducer;
