import * as mutations from "@store/mutation-types";
import * as actions from "@store/action-types";
import auth from "@api/auth";
import { EventBus } from "@services/event-bus";

export default {
  [actions.LOGIN]({ commit, dispatch }, credentials) {
    return new Promise((resolve, reject) => {
      auth
        .login(credentials)
        .then(response => {
          if (response.data.access_token) {
            console.log(response);
            commit(mutations.LOGGED, true);
            commit(mutations.ACCESS_TOKEN, response.data.access_token);
            commit(mutations.USER, response.data.user);
            dispatch(actions.SET_CURRENT_USER);
            EventBus.$emit("logged-in");
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
  [actions.LOGOUT]({ commit }) {
    return new Promise((resolve, reject) => {
      auth
        .logout()
        .then(response => {
          commit(mutations.LOGGED, false);
          commit(mutations.ACCESS_TOKEN, null);
          commit(mutations.USER, null);
          resolve(response);
        })
        .catch(error => {
          reject(error);
        });
    });
  },
  [actions.REGISTER]({ commit }, user) {
    return new Promise((resolve, reject) => {
      auth
        .register(user)
        .then(response => {
          commit(mutations.LOGGED, false);
          resolve(response);
        })
        .catch(error => {
          reject(error);
        });
    });
  },
  [actions.RESET_PASSWORD](context, user) {
    return new Promise((resolve, reject) => {
      auth
        .reset(user)
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
      auth
        .currentUser()
        .then(response => {
          commit(mutations.USER, response.data.data);
          resolve(response);
        })
        .catch(error => {
          reject(error);
        });
    });
  },
  [actions.CHECK_AUTH]({ commit }) {
    return new Promise((resolve) => {
      auth
        .checkAuth()
        .then(() => {
          commit(mutations.LOGGED, true);
        })
        .catch(() => {
          commit(mutations.LOGGED, false);
          commit(mutations.ACCESS_TOKEN, null);
          commit(mutations.USER, null);
        })
        .finally(() => {
          resolve(true);
        });
    });
  }
};
