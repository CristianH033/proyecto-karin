import Vue from "vue";
import Router from "vue-router";
import store from "@js/store";
import routes from "@js/routes/routes.js";

Vue.use(Router);

let router = new Router({
  routes: routes
});

// Función antes de cargar la ruta
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!store.getters.logged === true) {
      next({
        name: "login",
        query: { redirect: to.fullPath }
      });
    } else {
      next();
    }
  } else if (to.matched.some(record => record.meta.guest)) {
    if (!store.getters.logged === true) {
      next();
    } else {
      next({ name: "home" });
    }
  } else {
    next();
  }
});

export default router;
