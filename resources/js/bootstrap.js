/**
 * Función que se ejecuta cuando la página esté completamente cargada
 * y aplica transición "fade-out" al "splash" y remueve el elemento posteriormente
 */
// document.addEventListener("DOMContentLoaded", () => {
//   let splash = document.querySelector("#splash-loading");
//   let SplashListener = function() {
//     splash.removeEventListener("transitionend", SplashListener, false);
//     splash.remove();
//   };
//   splash.addEventListener("transitionend", SplashListener);
//   splash.classList.add("cargado");
// });

/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */

import axios from "axios";

require("@services/refresh-token-interceptor");
require("@services/request-interceptor");
require("@services/response-interceptor");

axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
axios.defaults.baseURL = `${process.env.MIX_APP_URL}`;

/**
 * Next we will register the CSRF Token as a common header with Axios so that
 * all outgoing HTTP requests automatically have it attached. This is just
 * a simple convenience so we don't have to attach every token manually.
 */

let token = document.head.querySelector('meta[name="csrf-token"]');

axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.headers.common["X-CSRF-TOKEN"] = token.content;

/**
 * Echo exposes an expressive API for subscribing to channels and listening
 * for events that are broadcast by Laravel. Echo and event broadcasting
 * allows your team to easily build robust real-time web applications.
 */

// import Echo from 'laravel-echo'

// window.Pusher = require('pusher-js');

// window.Echo = new Echo({
//     broadcaster: 'pusher',
//     key: process.env.MIX_PUSHER_APP_KEY,
//     cluster: process.env.MIX_PUSHER_APP_CLUSTER,
//     encrypted: true
// });
