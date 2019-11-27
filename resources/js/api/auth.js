import axios from "axios";
import {
  login as loginAPI,
  otpVerify as otpVerifyAPI,
  otpResend as otpResendAPI,
  logout as logoutAPI,
  register as registerAPI,
  refreshToken as refreshTokenAPI,
  passwordReset as passwordResetAPI,
  requestPasswordReset as requestPasswordResetAPI,
  resendEmail as resendEmailAPI,
  loggedUser as loggedUserAPI,
  checkAuth as checkAuthAPI
} from "@services/api.js";

const auth = {
  login: credentials => {
    return axios.post(loginAPI, credentials);
  },
  otpVerify: otp => {
    return axios.post(otpVerifyAPI, {
      OTP: otp
    });
  },
  otpResend: () => {
    return axios.post(otpResendAPI);
  },
  logout: () => {
    return axios.post(logoutAPI);
  },
  register: user => {
    return axios.post(registerAPI, user);
  },
  refreshToken: () => {
    return axios.post(refreshTokenAPI);
  },
  requestPwdReset: email => {
    return axios.post(requestPasswordResetAPI, {
      email: email
    });
  },
  reset: user => {
    return axios.post(passwordResetAPI, {
      email: user.email,
      password: user.password,
      password_confirmation: user.password_confirmation,
      token: user.token
    });
  },
  verify: signedURL => {
    return axios.get(signedURL);
  },
  resendEmail: email => {
    return axios.post(resendEmailAPI, {
      email: email
    });
  },
  currentUser: () => {
    return axios.get(loggedUserAPI);
  },
  checkAuth: () => {
    console.log(checkAuthAPI);
    return axios.get(checkAuthAPI);
  }
};

export const login = auth.login;
export const otpVerify = auth.otpVerify;
export const otpResend = auth.otpResend;
export const logout = auth.logout;
export const register = auth.register;
export const refreshToken = auth.refreshToken;
export const requestPwdReset = auth.requestPwdReset;
export const reset = auth.reset;
export const verify = auth.verify;
export const resendEmail = auth.resendEmail;
export const currentUser = auth.currentUser;
export const checkAuth = auth.checkAuth;

export default auth;
