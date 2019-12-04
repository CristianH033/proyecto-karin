import { EventBus } from "@services/event-bus";
import {
  SET_DARK_THEME as DARK_THEME,
  SET_USE_BROWSER_THEME as USE_BROWSER_THEME,
  APP_NAME,
  TITLE
} from "@store/mutation-types";
import {
  SET_DARK_THEME,
  SWITCH_DARK_THEME,
  SET_USE_BROWSER_THEME,
  SET_APP_NAME,
  SET_TITLE
} from "@store/action-types";

export default {
  [SET_DARK_THEME]({ commit }, val) {
    return new Promise(resolve => {
      commit(DARK_THEME, val);
      EventBus.$emit("dark-theme-changed");
      resolve();
    });
  },
  [SWITCH_DARK_THEME]({ dispatch, getters }) {
    return new Promise(resolve => {
      dispatch(SET_DARK_THEME, !getters.darkTheme);
      resolve();
    });
  },
  [SET_USE_BROWSER_THEME]({ commit }, val) {
    return new Promise(resolve => {
      commit(USE_BROWSER_THEME, val);
      resolve();
    });
  },
  [SET_APP_NAME]({ commit }, nombre) {
    return new Promise(resolve => {
      commit(APP_NAME, nombre);
      resolve();
    });
  },
  [SET_TITLE]({ commit, getters }, titulo) {
    return new Promise(resolve => {
      const appName = getters.getAppName;
      const composedName = [appName, titulo].filter(v => !!v).join(" | ");
      // Establecer titulo de pestaña
      document.title = composedName || appName;
      // Establecer titulo de app
      commit(TITLE, titulo);
      resolve();
    });
  }
};
