import * as mutations from "@store/mutation-types";

export default {
  [mutations.LOGGED](state, logged) {
    state.logged = logged;
  },
  [mutations.ATTEMPT_USER](state, user) {
    state.attemptUser = user;
  },
  [mutations.OTP_VERIFIED](state, verified) {
    state.otpverified = verified;
  },
  [mutations.ACCESS_TOKEN](state, accessToken) {
    state.accessToken = accessToken;
  },
  [mutations.USER](state, user) {
    state.user = user;
  }
};
