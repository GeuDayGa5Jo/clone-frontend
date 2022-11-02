import axios from "axios";
import { ServerUrl } from "../../../server";

//게시글 작성
export const addBoardContentApi = async (payload) => {
  await axios.post(`${ServerUrl}/auth/boards/create`, payload);
};

//게시글 불러오기
export const getBoardContentApi = async (payload) => {
  const response = await axios.get(`${ServerUrl}/auth/boards/`);
  return response.data;
};

//게시글 삭제하기
export const delBoardContentApi = async (boardId) => {
  const res = await axios.delete(`${ServerUrl}/auth/boards/${boardId}/delete`, {
    headers: {
      Authorization: localStorage.getItem("Authorization"),
      "Content-Type": "application/json",
    },
  });
  return res.data;
};
