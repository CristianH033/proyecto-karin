import * as mutations from "@store/mutation-types";

export default {
  [mutations.LOGGED](state, logged) {
    state.logged = logged;
  },
  [mutations.ACCESS_TOKEN](state, accessToken) {
    state.accessToken = accessToken;
  },
  [mutations.USER](state, user) {
    state.user = user;
  }
};
