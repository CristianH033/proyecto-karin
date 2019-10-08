import axios from "axios";
// import store from "@store/index"

// Global request interceptor
axios.interceptors.request.use(
  config => {
    // let token = store.getters.token;
    // if (token) {
      // config.headers["Authorization"] = `Bearer ${token}`;
    // }
    return config;
  },
  error => {
    console.log(error);
    console.log(error.response);
    return Promise.reject(error);
  }
);
