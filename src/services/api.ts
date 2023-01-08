import axios from "axios";

const api = axios.create({
  // baseURL: "https://api-m3-g2.herokuapp.com/",
  // baseURL: "http://localhost:3000/",
  // baseURL: "http://localhost:8000/api/",
  baseURL: "http://ec2-54-233-120-17.sa-east-1.compute.amazonaws.com:8000/api/",
  timeout: 5000,
  headers: {
    "Content-Security-Policy": "upgrade-insecure-requests",
  },
});

export default api;
