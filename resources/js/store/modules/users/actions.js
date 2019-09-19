import * as mutations from "@store/mutation-types";
import * as actions from "@store/action-types";
import users from "@api/users";

export default {
  [actions.SELECTED_USER](context, user) {
    context.commit(mutations.SELECTED_USER, user);
  },
  [actions.FETCH_USERS]() {
    return new Promise((resolve, reject) => {
      users
        .fetch()
        .then(response => {
          // context.commit(mutations.SET_USERS, response.data);
          resolve(response);
        })
        .catch(error => {
          reject(error);
        });
    });
  },
  [actions.UPDATE_USER](context, user) {
    return new Promise((resolve, reject) => {
      users
        .update(user)
        .then(response => {
          context.commit(mutations.USER, user);
          resolve(response);
        })
        .catch(error => {
          reject(error);
        });
    });
  }
};
