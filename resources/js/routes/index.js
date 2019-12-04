import Vue from "vue";
import store from "@js/store";
import Router from "vue-router";
import routes from "@js/routes/routes.js";
import { SET_TITLE } from "@store/action-types";

Vue.use(Router);

let router = new Router({
  mode: "hash",
  routes: routes
});

// Función antes de cargar la ruta
router.beforeEach(async (to, from, next) => {
  // Establecer titulo de app segun ruta
  store.dispatch(SET_TITLE, to.meta.title);
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!(store.getters.logged && store.getters.verifiedOTP)) {
      next({
        name: "login",
        query: { redirect: to.fullPath }
      });
    } else {
      next();
    }
  } else if (to.matched.some(record => record.meta.guest)) {
    if (!(store.getters.logged && store.getters.verifiedOTP)) {
      next();
    } else {
      next({ name: "home" });
    }
  } else {
    next();
  }
});

export default router;
