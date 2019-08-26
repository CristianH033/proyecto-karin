import Vue from "vue";
import Vuex from "vuex";
import VuexPersist from "vuex-persist";
import auth from "./modules/auth";
import fakeAuth from "./modules/fake-auth";
import snackbar from "./modules/snackbar";
import users from "./modules/users";

Vue.use(Vuex);

const vuexPersist = new VuexPersist({
  key: "keemble-app",
  storage: localStorage
});

const debug = process.env.NODE_ENV !== "production";

export default new Vuex.Store({
  modules: {
    auth,
    fakeAuth,
    snackbar,
    users
  },
  strict: debug,
  plugins: [vuexPersist.plugin]
});
