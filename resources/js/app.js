/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require("./bootstrap");

import Vue from "vue";
// Router
import router from "@js/routes";
// Store
import store from "@js/store";
// Vuetify
import vuetify from "@plugins/vuetify";
// Componente principal
import App from "@js/App.vue";

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

new Vue({
  router: router,
  store: store,
  vuetify,
  render: h => h(App)
}).$mount("#keemble-app");
