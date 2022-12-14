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

  // const accessToken = localStorage.getItem("Authorization");
  // console.log(accessToken);
  // config.headers.Authorization = accessToken;
  console.log(ServerUrl);
  return config;
});

export const userApis = {
  login: (payload) => api.post(`/member/login`, payload),

  signup: (payload) => api.post(`/member/signup`, payload),
};
