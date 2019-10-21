import * as mutations from "@store/mutation-types";

export default {
  [mutations.SET_DARK_THEME](state, val) {
    state.darkTheme = val;
  }
};
