import Vue from "vue";
import Vuex from "vuex";
import VuexPersist from "vuex-persist";
import app from "@store/modules/app";
import auth from "@store/modules/auth";
import snackbar from "@store/modules/snackbar";
import users from "@store/modules/users";

Vue.use(Vuex);

const vuexPersist = new VuexPersist({
  key: "keemble-app",
  storage: localStorage
});

const debug = process.env.NODE_ENV !== "production";

export default new Vuex.Store({
  modules: {
    app,
    auth,
    snackbar,
    users
  },
  strict: debug,
  plugins: [vuexPersist.plugin]
});
