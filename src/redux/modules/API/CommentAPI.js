import axios from "axios";
import { ServerUrl } from "../../../server";

const api = axios.create({
  baseURL: ServerUrl,
  headers: {
    "Content-Type": "application/json",
    accept: "application/json",
  },
});

api.interceptors.request.use(function (config) {
  // const accessToken = document.cookie.split(";")[0].split["="][1];
  // .find((row) => row.startsWith("Authorization"))
  // .split("=")
  // .find((row) => row.startsWith("Bearer"));
  // Authorization: localStorage.getItem("Authorization"),

  const accessToken = localStorage.getItem("Authorization");
  // console.log(accessToken);
  config.headers.Authorization = accessToken;
  console.log(ServerUrl);
  return config;
});

export const commentApis = {
  addComment: (commentContent, boardId) =>
    api.post(`/auth/comments/${boardId}/create`, { commentContent }),
};

export const delCommentApi = async (commentId) => {
  const res = await axios.delete(
    `${ServerUrl}/auth/comments/${commentId}/delete`,
    {
      headers: {
        Authorization: localStorage.getItem("Authorization"),
        "Content-Type": "application/json",
      },
    }
  );
  return res.data;
};
