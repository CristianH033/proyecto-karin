import * as mutations from "@store/mutation-types";
import * as actions from "@store/action-types";

export default {
  [actions.SET_DARK_THEME]({ commit }, val) {
    return new Promise(resolve => {
      commit(mutations.SET_DARK_THEME, val);
      resolve();
    });
  },
  [actions.SWITCH_DARK_THEME]({ dispatch, getters }) {
    return new Promise(resolve => {
      dispatch(actions.SET_DARK_THEME, !getters.darkTheme);
      resolve();
    });
  }
};
