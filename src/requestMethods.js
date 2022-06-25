import axios from "axios";

const BASE_URL = "https://API.abhinav80555.repl.co/api/";
// const TOKEN ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYWUwM2Y3NTBhYzQzM2M2NGQ2ZjZiMCIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2NTU2NTUyODUsImV4cCI6MTY1NTkxNDQ4NX0.2lbNM_LNZt0MV9V-sPW8Bnjvzr5YIztI7w4336PU7Us"
//   JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser
//     .accessToken || "";
const TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.accessToken;
console.log(JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.accessToken)
export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` },
});