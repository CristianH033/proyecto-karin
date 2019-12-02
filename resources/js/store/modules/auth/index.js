import getters from "./getters";
import actions from "./actions";
import mutations from "./mutations";

const state = {
  accessToken: null,
  attemptUser: null,
  user: null,
  logged: false,
  otpverified: false
};

export default {
  state,
  getters,
  actions,
  mutations
};
