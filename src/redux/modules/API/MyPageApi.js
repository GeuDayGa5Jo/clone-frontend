import axios from "axios";
import { ServerUrl } from "../../../server";

export const getMyPageApi = async () => {
  const response = await axios.get(`${ServerUrl}/member/auth/myPage`, {
    headers: {
      Authorization: localStorage.getItem("Authorization"),
      "Content-Type": "application/json",
    },
  });
  return response.data;
};
