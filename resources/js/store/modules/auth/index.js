import getters from "./getters";
import actions from "./actions";
import mutations from "./mutations";

const state = {
  accessToken: null,
  user: null,
  logged: false
};

export default {
  state,
  getters,
  actions,
  mutations
};
