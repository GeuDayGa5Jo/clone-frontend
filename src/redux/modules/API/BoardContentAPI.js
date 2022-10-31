import axios from "axios";
import { ServerUrl } from "../../../server";

//게시글 작성
export const addBoardContentApi = async (payload) => {
  console.log(payload);
  await axios.post(`${ServerUrl}/auth/boards/create`, { payload });
};
