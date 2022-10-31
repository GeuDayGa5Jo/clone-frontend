import axios from "axios";

const DATA_URL = "http://13.124.191.202:8080";

//게시글 작성
export const addBoardContentApi = async (payload) => {
  console.log("API payload=>", payload);
  await axios.post(`${DATA_URL}/auth/boards/create`, payload);
};
