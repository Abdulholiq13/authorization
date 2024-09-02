import axios from "axios";

const mainURL = axios.create({
  baseURL: "https://trade.namtech.uz",
});

mainURL.interceptors.request.use((config) => {
  let token = localStorage.getItem("token");
  config.headers.Authorization = `Barer ${token}`;

  return config;
});

export default mainURL;
