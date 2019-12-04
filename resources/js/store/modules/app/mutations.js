import {
  SET_DARK_THEME,
  SET_USE_BROWSER_THEME,
  APP_NAME,
  TITLE
} from "@store/mutation-types";

export default {
  [SET_DARK_THEME](state, val) {
    state.darkTheme = val;
  },
  [SET_USE_BROWSER_THEME](state, val) {
    state.useBrowserTheme = val;
  },
  [APP_NAME](state, nombre) {
    state.appName = nombre;
  },
  [TITLE](state, titulo) {
    state.title = titulo;
  }
};
