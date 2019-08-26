import * as mutations from "../../mutation-types";
import * as actions from "../../action-types";

export default {
  [actions.FAKE_LOGIN](context) {
    return new Promise((resolve) => {
      context.commit(mutations.FAKE_LOGGED, true);
      resolve();
    });
  },
  [actions.FAKE_LOGOUT](context) {
    return new Promise((resolve) => {
      context.commit(mutations.FAKE_LOGGED, false);
      resolve();
    });
  }
};
