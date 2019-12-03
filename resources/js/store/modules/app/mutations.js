import { SET_DARK_THEME, SET_USE_BROWSER_THEME } from "@store/mutation-types";

export default {
  [SET_DARK_THEME](state, val) {
    state.darkTheme = val;
  },
  [SET_USE_BROWSER_THEME](state, val) {
    state.useBrowserTheme = val;
  }
};
