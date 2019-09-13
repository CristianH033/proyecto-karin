import * as types from "@store/mutation-types";

export default {
  [types.LOGGED](state, logged) {
    state.logged = logged;
  },
  [types.TOKEN](state, token) {
    state.token = token;
  },
  [types.USER](state, user) {
    state.user = user;
  }
};
