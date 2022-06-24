import axios from "axios";

const BASE_URL = "https://API.abhinav80555.repl.co/api/";
const TOKEN =""
//   JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser
//     .accessToken || "";

console.log(localStorage.getItem("persist:root"))
export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});