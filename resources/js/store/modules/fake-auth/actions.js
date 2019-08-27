import * as mutations from "../../mutation-types";
import * as actions from "../../action-types";

export default {
  [actions.FAKE_LOGIN](context) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let random = Math.floor(Math.random() * 10 + 1);
        switch (true) {
          case random > 5:
            context.commit(mutations.FAKE_LOGGED, true);
            this._vm.$globalEvent.$emit("logged-in");
            resolve();
            break;
          default:
            reject();
            break;
        }
      }, 2000);
    });
  },
  [actions.FAKE_LOGOUT](context) {
    return new Promise(resolve => {
      context.commit(mutations.FAKE_LOGGED, false);
      resolve();
    });
  }
};
