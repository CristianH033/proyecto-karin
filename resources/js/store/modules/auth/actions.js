import * as mutations from "@store/mutation-types";
import * as actions from "@store/action-types";
import auth from "@api/auth";
import { EventBus } from "@services/event-bus";

export default {
  [actions.LOGIN]({ commit }, credentials) {
    return new Promise((resolve, reject) => {
      auth
        .login(credentials)
        .then(response => {
          console.log(response);
          commit(mutations.LOGGED, true);
          commit(mutations.TOKEN, response.data.token);
          commit(mutations.USER, response.data.user);
          EventBus.$emit("logged-in");
          resolve(response);
        })
        .catch(error => {
          reject(error);
        });
    });
  },
  [actions.LOGOUT](context) {
    return new Promise((resolve, reject) => {
      auth
        .logout()
        .then(response => {
          context.commit(mutations.LOGGED, false);
          resolve(response);
        })
        .catch(error => {
          reject(error);
        });
    });
  },
  [actions.REGISTER](context, user) {
    return new Promise((resolve, reject) => {
      auth
        .register(user)
        .then(response => {
          context.commit(mutations.LOGGED, false);
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
  }
};
