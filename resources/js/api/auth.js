import axios from "axios";
import {
  login,
  logout,
  register,
  refreshToken,
  passwordReset,
  loggedUser,
  checkAuth
} from "@services/api.js";

export default {
  login(credentials) {
    return axios.post(login, credentials);
  },
  logout() {
    return axios.post(logout);
  },
  register(user) {
    return axios.post(register, {
      name: user.name,
      email: user.email,
      password: user.password,
      password_confirmation: user.password_confirmation
    });
  },
  refreshToken() {
    return axios.post(refreshToken);
  },
  reset(user) {
    return axios.post(passwordReset, {
      email: user.email,
      password: user.password,
      password_confirmation: user.password_confirmation,
      token: user.token
    });
  },
  currentUser() {
    return axios.get(loggedUser);
  },
  checkAuth() {
    return axios.get(checkAuth);
  }
};
