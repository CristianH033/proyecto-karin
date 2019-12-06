/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require("./bootstrap");

// Scss
import "@sass/app.scss";
// Vue
import Vue from "vue";
// Router
import router from "@js/routes";
// Store
import store from "@js/store";
// Vuetify
import vuetify from "@plugins/vuetify";
// VuetifyToast
import VuetifyToast from "vuetify-toast-snackbar";
// Portal Vue
import PortalVue from "portal-vue";

// Componente principal
import App from "@js/App.vue";

// Importar tipo de accion CHECK_AUTH
import { CHECK_AUTH } from "@store/action-types";

// Use VuetifyToast
Vue.use(VuetifyToast, {
  x: false,
  dismissable: true,
  showClose: true,
  closeIcon: "mdi-close",
  multiLine: true,
  timeout: 10000
});

// Usar PortalVue
Vue.use(PortalVue);

/**
 * Verificar autenticación con el servidor
 * y establecer datos en el store, una vez
 * establecidos crear la instancia principal
 * de Vue para la web app.
 */

store
  .dispatch(CHECK_AUTH)
  .then(() => {})
  .catch(() => {})
  .finally(() => {
    new Vue({
      router: router,
      store: store,
      vuetify,
      render: h => h(App)
    }).$mount("#keemble-app");
  });
