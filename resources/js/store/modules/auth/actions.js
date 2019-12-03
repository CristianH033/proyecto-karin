import * as mutations from "@store/mutation-types";
import * as actions from "@store/action-types";
import { EventBus } from "@services/event-bus";
import {
  login,
  otpVerify,
  otpResend,
  logout,
  register,
  requestPwdReset,
  reset,
  currentUser,
  checkAuth,
  verify,
  resendEmail
} from "@api/auth";
export default {
  [actions.LOGIN]({ commit }, credentials) {
    return new Promise((resolve, reject) => {
      login(credentials)
        .then(response => {
          if (response.data.access_token) {
            commit(mutations.LOGGED, true);
            commit(mutations.ATTEMPT_USER, { email: credentials.email });
            commit(mutations.ACCESS_TOKEN, response.data.access_token);
            resolve(response);
          } else {
            reject("Token not provided");
          }
        })
        .catch(error => {
          reject(error);
        });
    });
  },
  [actions.VERIFY_OTP]({ commit, dispatch }, otp) {
    return new Promise((resolve, reject) => {
      otpVerify(otp)
        .then(response => {
          commit(mutations.OTP_VERIFIED, true);
          dispatch(actions.SET_CURRENT_USER);
          resolve(response);
        })
        .catch(error => {
          commit(mutations.OTP_VERIFIED, false);
          reject(error);
        });
    });
  },
  [actions.RESEND_OTP]() {
    return new Promise((resolve, reject) => {
      otpResend()
        .then(response => {
          resolve(response);
        })
        .catch(error => {
          reject(error);
        });
    });
  },
  [actions.LOGOUT]({ commit }) {
    return new Promise((resolve, reject) => {
      logout()
        .then(response => {
          resolve(response);
        })
        .catch(error => {
          reject(error);
        })
        .finally(() => {
          commit(mutations.USER, null);
          commit(mutations.ATTEMPT_USER, null);
          commit(mutations.OTP_VERIFIED, false);
          commit(mutations.ACCESS_TOKEN, null);
          commit(mutations.LOGGED, false);
          EventBus.$emit("logged-out");
        });
    });
  },
  [actions.REGISTER]({ commit }, user) {
    return new Promise((resolve, reject) => {
      register(user)
        .then(response => {
          commit(mutations.LOGGED, false);
          resolve(response);
        })
        .catch(error => {
          reject(error);
        });
    });
  },
  [actions.REQUEST_PWD_RESET](context, email) {
    return new Promise((resolve, reject) => {
      requestPwdReset(email)
        .then(response => {
          resolve(response);
        })
        .catch(error => {
          reject(error);
        });
    });
  },
  [actions.RESET_PASSWORD](context, user) {
    return new Promise((resolve, reject) => {
      reset(user)
        .then(response => {
          resolve(response);
        })
        .catch(error => {
          reject(error);
        });
    });
  },
  [actions.VERIFY_EMAIL](context, signedURL) {
    return new Promise((resolve, reject) => {
      verify(signedURL)
        .then(response => {
          resolve(response);
        })
        .catch(error => {
          reject(error);
        });
    });
  },
  [actions.RESEND_EMAIL](context, email) {
    return new Promise((resolve, reject) => {
      resendEmail(email)
        .then(response => {
          resolve(response);
        })
        .catch(error => {
          reject(error);
        });
    });
  },
  [actions.SET_CURRENT_USER]({ commit }) {
    return new Promise((resolve, reject) => {
      currentUser()
        .then(response => {
          commit(mutations.USER, response.data.data);
          resolve(response);
        })
        .catch(error => {
          reject(error);
        });
    });
  },
  [actions.CHECK_AUTH]({ commit, dispatch }) {
    return new Promise((resolve, reject) => {
      checkAuth()
        .then(response => {
          commit(mutations.LOGGED, true);
          dispatch(actions.SET_CURRENT_USER);
          resolve(response);
        })
        .catch(error => {
          switch (error.response.status) {
            case 401:
              commit(mutations.LOGGED, false);
              commit(mutations.OTP_VERIFIED, false);
              commit(mutations.USER, null);
              commit(mutations.ATTEMPT_USER, null);
              commit(mutations.ACCESS_TOKEN, null);
              break;
            default:
              break;
          }
          reject(error);
        });
    });
  }
};
