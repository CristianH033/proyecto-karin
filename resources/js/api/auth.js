import axios from "axios";
import { login, logout, register, passwordReset } from "@services/api.js";

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
  reset(user) {
    return axios.post(passwordReset, {
      email: user.email,
      password: user.password,
      password_confirmation: user.password_confirmation,
      token: user.token
    });
  }
};
