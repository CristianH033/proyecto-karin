import axios from "axios";
import store from "@store/index";

// Global request interceptor
axios.interceptors.request.use(
  config => {
    let accessToken = store.getters.accessToken;
    if (accessToken) {
      config.headers["Authorization"] = `Bearer ${accessToken}`;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);
