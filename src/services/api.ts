import axios from "axios";

const api = axios.create({
  // baseURL: "https://api-m3-g2.herokuapp.com/",
  // baseURL: "http://localhost:3000/",
  baseURL: "https://api-m4-g19.herokuapp.com/",
  timeout: 5000,
});

export default api;
