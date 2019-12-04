import getters from "./getters";
import actions from "./actions";
import mutations from "./mutations";

const state = {
  darkTheme: false,
  useBrowserTheme: true,
  appName: "Kimblee",
  title: "Kimblee"
};

export default {
  state,
  getters,
  actions,
  mutations
};
