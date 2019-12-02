(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["/js/app"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/App.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/App.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _js_store_action_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @js/store/action-types */ "./resources/js/store/action-types.js");
/* harmony import */ var _services_event_bus__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services/event-bus */ "./resources/js/services/event-bus.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  name: "App",
  components: {},
  data: function data() {
    return {};
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])({
    darkTheme: "getDarkTheme"
  })),
  created: function created() {
    var _this = this;

    // Establecer tema oscuro según store
    this.$vuetify.theme.dark = this.darkTheme; // Cambiar color de fondo del documento segun tema

    document.documentElement.style.setProperty("--kimblee-body-bg", this.darkTheme ? "black" : "white"); // Vigilar valos tema oscuro en store

    this.$store.watch(function (state, getters) {
      return getters.getDarkTheme;
    }, function (val) {
      _this.$vuetify.theme.dark = val;
      document.documentElement.style.setProperty("--kimblee-body-bg", val ? "black" : "white");
    });
  },
  mounted: function mounted() {
    var _this2 = this;

    // Evento global (logedin)
    _services_event_bus__WEBPACK_IMPORTED_MODULE_2__["EventBus"].$on("logged-in", function () {
      console.log("Evento logged-in en App.vue");

      _this2.loggedIn();
    }); // Evento global (loggedout)

    _services_event_bus__WEBPACK_IMPORTED_MODULE_2__["EventBus"].$on("logged-out", function () {
      console.log("Evento logged-out en App.vue");

      _this2.loggedOut();
    }); // Check Auth

    this.$store.dispatch(_js_store_action_types__WEBPACK_IMPORTED_MODULE_1__["CHECK_AUTH"]).then(function () {})["catch"](function (error) {
      switch (error.response.status) {
        case 401:
          _this2.loggedOut();

          break;

        default:
          break;
      }
    });
  },
  beforeDestroy: function beforeDestroy() {
    _services_event_bus__WEBPACK_IMPORTED_MODULE_2__["EventBus"].$off("logged-in");
    _services_event_bus__WEBPACK_IMPORTED_MODULE_2__["EventBus"].$off("logged-out");
  },
  methods: {
    loggedIn: function loggedIn() {
      console.log("X");
      var route = this.$route.query.redirect ? this.$route.query.redirect : {
        name: "home"
      };
      console.log(route);
      this.$router.push({
        name: "home"
      });
    },
    loggedOut: function loggedOut() {
      console.log("Y");
      this.$router.push({
        name: "login"
      })["catch"](function () {});
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboard/AppBar.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/dashboard/AppBar.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_event_bus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @services/event-bus */ "./resources/js/services/event-bus.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "AppBar",
  props: {
    loading: Boolean
  },
  data: function data() {
    return {};
  },
  methods: {
    togleSidebarMenu: function togleSidebarMenu() {
      _services_event_bus__WEBPACK_IMPORTED_MODULE_0__["EventBus"].$emit("togleSidebarMenu");
    },
    togleSidebarUserMenu: function togleSidebarUserMenu() {
      _services_event_bus__WEBPACK_IMPORTED_MODULE_0__["EventBus"].$emit("togleSidebarUserMenu");
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboard/SidebarMenu.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/dashboard/SidebarMenu.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_event_bus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/event-bus */ "./resources/js/services/event-bus.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "SidebarMenu",
  data: function data() {
    return {
      drawer: null,
      menuItems: [{
        type: "item",
        text: "Inicio",
        icon: "mdi-home",
        to: {
          name: "home"
        }
      }, {
        type: "divider"
      }, {
        type: "subheader",
        text: "Administración"
      }, {
        type: "group",
        text: "Administración",
        icon: "mdi-security",
        children: [{
          type: "item",
          text: "Usuarios",
          icon: "mdi-shield-account",
          to: {
            name: "admin-users"
          }
        }, {
          type: "item",
          text: "Roles y permisos",
          icon: "mdi-account-key",
          to: {
            name: "admin-roles"
          }
        }]
      }, {
        type: "divider"
      }, {
        type: "subheader",
        text: "Clientes"
      }, {
        type: "group",
        text: "Clientes",
        icon: "mdi-domain",
        children: [{
          type: "item",
          text: "Dispositivos",
          icon: "mdi-devices",
          to: {
            name: "devices"
          }
        }, {
          type: "item",
          text: "Sedes",
          icon: "mdi-home-city",
          to: {
            name: "headquarters"
          }
        }, {
          type: "item",
          text: "Personal",
          icon: "mdi-account-group",
          to: {
            name: "staff"
          }
        }, {
          type: "item",
          text: "Porveedores",
          icon: "mdi-store",
          to: {
            name: "suppliers"
          }
        }, {
          type: "item",
          text: "Estaciones de trabajo",
          icon: "mdi-desktop-classic",
          to: {
            name: "work-stations"
          }
        }]
      }, {
        type: "divider"
      }, {
        type: "subheader",
        text: "Soporte y servicio"
      }, {
        type: "group",
        text: "Soporte y servicio",
        icon: "mdi-face-agent",
        children: [{
          type: "item",
          text: "Roles y permisos",
          icon: "mdi-account-key",
          to: {
            name: "admin-roles"
          }
        }]
      }, {
        type: "divider"
      }, {
        type: "item",
        text: "Acerca de nosotros",
        icon: "mdi-information-outline",
        to: {
          name: "about"
        }
      }]
    };
  },
  mounted: function mounted() {
    var _this = this;

    _services_event_bus__WEBPACK_IMPORTED_MODULE_0__["EventBus"].$on("togleSidebarMenu", function () {
      return _this.drawer = !_this.drawer;
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboard/SidebarUserMenu.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/dashboard/SidebarUserMenu.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_event_bus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @services/event-bus */ "./resources/js/services/event-bus.js");
/* harmony import */ var _store_action_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @store/action-types */ "./resources/js/store/action-types.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  name: "SidebarUserMenu",
  props: {
    nombre: {
      type: String,
      "default": "Cargando..."
    },
    email: {
      type: String,
      "default": "Cargando..."
    }
  },
  data: function data() {
    return {
      drawer: null
    };
  },
  computed: {
    darkTheme: {
      get: function get() {
        return this.$store.getters.getDarkTheme;
      },
      set: function set(value) {
        this.$store.dispatch("SET_DARK_THEME", value);
      }
    }
  },
  mounted: function mounted() {
    var _this = this;

    _services_event_bus__WEBPACK_IMPORTED_MODULE_0__["EventBus"].$on("togleSidebarUserMenu", function () {
      return _this.drawer = !_this.drawer;
    });
  },
  methods: {
    salir: function salir() {
      this.$store.dispatch(_store_action_types__WEBPACK_IMPORTED_MODULE_1__["LOGOUT"]);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/layouts/AuthLayout.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/layouts/AuthLayout.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var unregisterBeforeEach, unregisterBeforeResolve;
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "Auth",
  components: {},
  data: function data() {
    return {
      loading: false
    };
  },
  computed: {},
  created: function created() {},
  mounted: function mounted() {
    var _this = this;

    // Eventos de rutas
    unregisterBeforeEach = this.$router.beforeEach(function (to, from, next) {
      // Ruta solicitada
      _this.loading = true;
      next();
    });
    unregisterBeforeResolve = this.$router.beforeResolve(function (to, from, next) {
      // Ruta resuelta
      _this.loading = false;
      next();
    });
  },
  beforeDestroy: function beforeDestroy() {
    // Desvincular el evento de rutas
    unregisterBeforeEach();
    unregisterBeforeResolve();
  },
  methods: {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/layouts/DashBoardLayout.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/layouts/DashBoardLayout.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_dashboard_AppBar_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @components/dashboard/AppBar.vue */ "./resources/js/components/dashboard/AppBar.vue");
/* harmony import */ var _components_dashboard_SidebarMenu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @components/dashboard/SidebarMenu */ "./resources/js/components/dashboard/SidebarMenu.vue");
/* harmony import */ var _components_dashboard_SidebarUserMenu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/dashboard/SidebarUserMenu */ "./resources/js/components/dashboard/SidebarUserMenu.vue");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var unregisterBeforeEach, unregisterBeforeResolve;




/* harmony default export */ __webpack_exports__["default"] = ({
  name: "Dashboard",
  components: {
    SidebarMenu: _components_dashboard_SidebarMenu__WEBPACK_IMPORTED_MODULE_1__["default"],
    SidebarUserMenu: _components_dashboard_SidebarUserMenu__WEBPACK_IMPORTED_MODULE_2__["default"],
    AppBar: _components_dashboard_AppBar_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      loading: false
    };
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_3__["mapGetters"])({
    user: "user"
  })),
  created: function created() {},
  mounted: function mounted() {
    var _this = this;

    // Eventos de rutas
    unregisterBeforeEach = this.$router.beforeEach(function (to, from, next) {
      // Ruta solicitada
      _this.loading = true;
      next();
    });
    unregisterBeforeResolve = this.$router.beforeResolve(function (to, from, next) {
      // Ruta resuelta
      _this.loading = false;
      next();
    });
  },
  beforeDestroy: function beforeDestroy() {
    // Desvincular el evento de rutas
    unregisterBeforeEach();
    unregisterBeforeResolve();
  },
  methods: {}
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./resources/sass/app.scss":
/*!********************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/postcss-loader/src??ref--6-2!./node_modules/sass-loader/dist/cjs.js??ref--6-3!./resources/sass/app.scss ***!
  \********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports
exports.i(__webpack_require__(/*! -!../../node_modules/css-loader!roboto-fontface/css/roboto/roboto-fontface.css */ "./node_modules/css-loader/index.js!./node_modules/roboto-fontface/css/roboto/roboto-fontface.css"), "");
exports.i(__webpack_require__(/*! -!../../node_modules/css-loader!vuetify/dist/vuetify.min.css */ "./node_modules/css-loader/index.js!./node_modules/vuetify/dist/vuetify.min.css"), "");
exports.i(__webpack_require__(/*! -!../../node_modules/css-loader!@mdi/font/css/materialdesignicons.css */ "./node_modules/css-loader/index.js!./node_modules/@mdi/font/css/materialdesignicons.css"), "");

// module
exports.push([module.i, "/** Roboto fontface **/\n/** Vuetify **/\n/** Material Design Icons **/\n[v-cloak] > * {\n  display: none;\n}\n\n[v-cloak]::before {\n  content: \" \";\n  display: block;\n  width: 40px;\n  height: 40px;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n}\n\n:root {\n  --kimblee-body-bg: white;\n}\n\nbody {\n  background-color: var(--kimblee-body-bg);\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/layouts/AuthLayout.vue?vue&type=style&index=0&id=3d871156&lang=scss&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/sass-loader/dist/cjs.js??ref--6-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/layouts/AuthLayout.vue?vue&type=style&index=0&id=3d871156&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".fade-enter-active[data-v-3d871156],\n.fade-leave-active[data-v-3d871156] {\n  transition: opacity 0.5s, transform 0.5s;\n}\n.fade-enter[data-v-3d871156],\n.fade-leave-to[data-v-3d871156] {\n  opacity: 0;\n  transform: translateY(15px);\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/layouts/DashBoardLayout.vue?vue&type=style&index=1&id=cb7685ec&lang=scss&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/sass-loader/dist/cjs.js??ref--6-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/layouts/DashBoardLayout.vue?vue&type=style&index=1&id=cb7685ec&lang=scss&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".layout-container[data-v-cb7685ec] {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  top: 0px;\n  left: 0px;\n}\n.dashboard-leave-active[data-v-cb7685ec] {\n  transition-delay: 0s;\n}\n.dashboard-enter-active[data-v-cb7685ec] {\n  transition-delay: 0s;\n}\n.dashboard-leave-to[data-v-cb7685ec] {\n  transition-delay: 0.7s;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/layouts/AuthLayout.vue?vue&type=style&index=0&id=3d871156&lang=scss&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/sass-loader/dist/cjs.js??ref--6-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/layouts/AuthLayout.vue?vue&type=style&index=0&id=3d871156&lang=scss&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/sass-loader/dist/cjs.js??ref--6-3!../../../node_modules/vue-loader/lib??vue-loader-options!./AuthLayout.vue?vue&type=style&index=0&id=3d871156&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/layouts/AuthLayout.vue?vue&type=style&index=0&id=3d871156&lang=scss&scoped=true&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/layouts/DashBoardLayout.vue?vue&type=style&index=1&id=cb7685ec&lang=scss&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/sass-loader/dist/cjs.js??ref--6-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/layouts/DashBoardLayout.vue?vue&type=style&index=1&id=cb7685ec&lang=scss&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/sass-loader/dist/cjs.js??ref--6-3!../../../node_modules/vue-loader/lib??vue-loader-options!./DashBoardLayout.vue?vue&type=style&index=1&id=cb7685ec&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/layouts/DashBoardLayout.vue?vue&type=style&index=1&id=cb7685ec&lang=scss&scoped=true&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/App.vue?vue&type=template&id=f348271a&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/App.vue?vue&type=template&id=f348271a&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "transition",
    { attrs: { name: "fade-transition", mode: "out-in" } },
    [_c("router-view")],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboard/AppBar.vue?vue&type=template&id=6c6f4410&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/dashboard/AppBar.vue?vue&type=template&id=6c6f4410& ***!
  \*******************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-app-bar",
    {
      attrs: { app: "", "clipped-left": "", fixed: "", "elevate-on-scroll": "" }
    },
    [
      _c("v-app-bar-nav-icon", {
        on: {
          click: function($event) {
            $event.stopPropagation()
            return _vm.togleSidebarMenu($event)
          }
        }
      }),
      _vm._v(" "),
      _c(
        "v-toolbar-title",
        { staticStyle: { width: "300px" } },
        [
          _c("v-icon", [_vm._v("mdi-paw")]),
          _vm._v(" "),
          _c("span", { staticClass: "hidden-sm-and-down" }, [_vm._v("Keemble")])
        ],
        1
      ),
      _vm._v(" "),
      _c("v-text-field", {
        staticClass: "hidden-sm-and-down",
        attrs: {
          flat: "",
          "solo-inverted": "",
          "hide-details": "",
          "prepend-inner-icon": "mdi-magnify",
          label: "Buscar"
        }
      }),
      _vm._v(" "),
      _c("div", { staticClass: "flex-grow-1" }),
      _vm._v(" "),
      _c(
        "v-btn",
        { attrs: { icon: "" } },
        [_c("v-icon", [_vm._v("mdi-apps")])],
        1
      ),
      _vm._v(" "),
      _c(
        "v-btn",
        { attrs: { icon: "" } },
        [
          _c(
            "v-badge",
            {
              staticClass: "align-self-center",
              attrs: { overlap: "" },
              scopedSlots: _vm._u([
                {
                  key: "badge",
                  fn: function() {
                    return [_c("span", [_vm._v("5")])]
                  },
                  proxy: true
                }
              ])
            },
            [_vm._v(" "), _c("v-icon", [_vm._v("mdi-bell")])],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-btn",
        {
          attrs: { icon: "", large: "" },
          on: {
            click: function($event) {
              $event.stopPropagation()
              return _vm.togleSidebarUserMenu($event)
            }
          }
        },
        [
          _c(
            "v-avatar",
            { attrs: { size: "32px", item: "" } },
            [_c("v-icon", [_vm._v("mdi-account-circle")])],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c("v-progress-linear", {
        attrs: {
          active: _vm.loading,
          indeterminate: true,
          absolute: "",
          top: ""
        }
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboard/SidebarMenu.vue?vue&type=template&id=533eb685&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/dashboard/SidebarMenu.vue?vue&type=template&id=533eb685& ***!
  \************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-navigation-drawer",
    {
      attrs: { width: "300", app: "", clipped: "" },
      scopedSlots: _vm._u([
        {
          key: "append",
          fn: function() {
            return [
              _c(
                "v-footer",
                [
                  _c(
                    "v-toolbar-title",
                    { staticStyle: { width: "300px" } },
                    [
                      _c("v-icon", [_vm._v("mdi-paw")]),
                      _vm._v(" "),
                      _c("span", { staticClass: "hidden-sm-and-down" }, [
                        _vm._v("Keemble")
                      ])
                    ],
                    1
                  )
                ],
                1
              )
            ]
          },
          proxy: true
        }
      ]),
      model: {
        value: _vm.drawer,
        callback: function($$v) {
          _vm.drawer = $$v
        },
        expression: "drawer"
      }
    },
    [
      _c(
        "v-list",
        { attrs: { dense: "", rounded: "" } },
        [
          _c(
            "v-list-item-group",
            { attrs: { color: "primary" } },
            _vm._l(_vm.menuItems, function(item, index) {
              return _c(
                "div",
                { key: index },
                [
                  item.type == "item"
                    ? _c(
                        "v-list-item",
                        { attrs: { to: item.to } },
                        [
                          _c(
                            "v-list-item-action",
                            [_c("v-icon", [_vm._v(_vm._s(item.icon))])],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-list-item-content",
                            [
                              _c("v-list-item-title", [
                                _vm._v(_vm._s(item.text))
                              ])
                            ],
                            1
                          )
                        ],
                        1
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  item.type == "divider"
                    ? _c("v-divider", {
                        staticClass: "my-4",
                        attrs: { dark: "" }
                      })
                    : _vm._e(),
                  _vm._v(" "),
                  item.type == "subheader"
                    ? _c("v-subheader", [
                        _vm._v(
                          "\n          " + _vm._s(item.text) + "\n        "
                        )
                      ])
                    : _vm._e(),
                  _vm._v(" "),
                  item.type == "group"
                    ? _c(
                        "v-list-group",
                        {
                          attrs: { "no-action": "" },
                          scopedSlots: _vm._u(
                            [
                              {
                                key: "activator",
                                fn: function() {
                                  return [
                                    _c(
                                      "v-list-item-action",
                                      [
                                        _c("v-icon", [
                                          _vm._v(_vm._s(item.icon))
                                        ])
                                      ],
                                      1
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "v-list-item-content",
                                      [
                                        _c("v-list-item-title", [
                                          _vm._v(_vm._s(item.text))
                                        ])
                                      ],
                                      1
                                    )
                                  ]
                                },
                                proxy: true
                              }
                            ],
                            null,
                            true
                          )
                        },
                        [
                          _vm._v(" "),
                          _vm._l(item.children, function(subitem, i) {
                            return _c(
                              "v-list-item",
                              { key: i, attrs: { to: subitem.to } },
                              [
                                _c(
                                  "v-list-item-action",
                                  [
                                    _c("v-icon", [_vm._v(_vm._s(subitem.icon))])
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "v-list-item-content",
                                  [
                                    _c("v-list-item-title", [
                                      _vm._v(_vm._s(subitem.text))
                                    ])
                                  ],
                                  1
                                )
                              ],
                              1
                            )
                          })
                        ],
                        2
                      )
                    : _vm._e()
                ],
                1
              )
            }),
            0
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboard/SidebarUserMenu.vue?vue&type=template&id=b6195720&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/dashboard/SidebarUserMenu.vue?vue&type=template&id=b6195720& ***!
  \****************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-navigation-drawer",
    {
      attrs: { width: "300", app: "", temporary: "", right: "" },
      scopedSlots: _vm._u([
        {
          key: "append",
          fn: function() {
            return [
              _c(
                "div",
                { staticClass: "pa-2" },
                [
                  _c(
                    "v-btn",
                    {
                      attrs: { block: "", text: "", color: "error" },
                      on: { click: _vm.salir }
                    },
                    [
                      _c("v-icon", [_vm._v("mdi-power")]),
                      _vm._v(" "),
                      _c("div", { staticClass: "flex-grow-1" }),
                      _vm._v("\n        Salir\n      ")
                    ],
                    1
                  )
                ],
                1
              )
            ]
          },
          proxy: true
        }
      ]),
      model: {
        value: _vm.drawer,
        callback: function($$v) {
          _vm.drawer = $$v
        },
        expression: "drawer"
      }
    },
    [
      _c(
        "v-list",
        [
          _c(
            "v-list-item",
            [
              _c(
                "v-list-item-avatar",
                [
                  _c("v-avatar", { attrs: { color: "red" } }, [
                    _c(
                      "span",
                      { staticClass: "white--text headline text-capitalize" },
                      [
                        _vm._v(
                          "\n            " +
                            _vm._s(_vm.nombre[0]) +
                            "\n          "
                        )
                      ]
                    )
                  ])
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-list-item-content",
                [
                  _c("v-list-item-title", { staticClass: "text-capitalize" }, [
                    _vm._v("\n          " + _vm._s(_vm.nombre) + "\n        ")
                  ]),
                  _vm._v(" "),
                  _c("v-list-item-subtitle", [_vm._v(_vm._s(_vm.email))])
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c("v-divider")
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-list",
        { attrs: { dense: "" } },
        [
          _c(
            "v-list-item",
            { attrs: { link: "" } },
            [
              _c(
                "v-list-item-icon",
                [_c("v-icon", [_vm._v("mdi-settings")])],
                1
              ),
              _vm._v(" "),
              _c(
                "v-list-item-content",
                [_c("v-list-item-title", [_vm._v("Configuraciones")])],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-list-item",
            [
              _c(
                "v-list-item-icon",
                [_c("v-icon", [_vm._v("mdi-brightness-6")])],
                1
              ),
              _vm._v(" "),
              _c(
                "v-list-item-content",
                [
                  _c("v-list-item-title", [
                    _vm._v("\n          Tema oscuro\n        ")
                  ])
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-list-item-action",
                [
                  _c("v-switch", {
                    model: {
                      value: _vm.darkTheme,
                      callback: function($$v) {
                        _vm.darkTheme = $$v
                      },
                      expression: "darkTheme"
                    }
                  })
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/layouts/AuthLayout.vue?vue&type=template&id=3d871156&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/layouts/AuthLayout.vue?vue&type=template&id=3d871156&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-app",
    { attrs: { id: "kemble-app", app: "" } },
    [
      _c("v-progress-linear", {
        attrs: {
          active: _vm.loading,
          indeterminate: _vm.loading,
          absolute: "",
          top: ""
        }
      }),
      _vm._v(" "),
      _c(
        "v-content",
        [
          _c(
            "v-container",
            { staticClass: "fill-height", attrs: { fluid: "" } },
            [
              _c(
                "v-row",
                { attrs: { align: "center", justify: "center" } },
                [
                  _c(
                    "v-col",
                    { attrs: { cols: "12", sm: "8", md: "4" } },
                    [
                      _c(
                        "transition",
                        { attrs: { name: "fade", mode: "out-in" } },
                        [_c("router-view")],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/layouts/DashBoardLayout.vue?vue&type=template&id=cb7685ec&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/layouts/DashBoardLayout.vue?vue&type=template&id=cb7685ec&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-app",
    { attrs: { id: "kemble-app", app: "" } },
    [
      _c("app-bar", { attrs: { loading: _vm.loading } }),
      _vm._v(" "),
      _c("sidebar-menu"),
      _vm._v(" "),
      _c("sidebar-user-menu", _vm._b({}, "sidebar-user-menu", _vm.user, false)),
      _vm._v(" "),
      _c(
        "v-content",
        [
          _c(
            "v-container",
            { attrs: { fluid: "" } },
            [
              _c(
                "transition",
                { attrs: { name: "fade-transition", mode: "out-in" } },
                [_c("router-view")],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/App.vue":
/*!******************************!*\
  !*** ./resources/js/App.vue ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _App_vue_vue_type_template_id_f348271a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=f348271a&scoped=true& */ "./resources/js/App.vue?vue&type=template&id=f348271a&scoped=true&");
/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ "./resources/js/App.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _App_vue_vue_type_template_id_f348271a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _App_vue_vue_type_template_id_f348271a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "f348271a",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/App.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/App.vue?vue&type=script&lang=js&":
/*!*******************************************************!*\
  !*** ./resources/js/App.vue?vue&type=script&lang=js& ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib??ref--4-0!../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/App.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/App.vue?vue&type=template&id=f348271a&scoped=true&":
/*!*************************************************************************!*\
  !*** ./resources/js/App.vue?vue&type=template&id=f348271a&scoped=true& ***!
  \*************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_f348271a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=f348271a&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/App.vue?vue&type=template&id=f348271a&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_f348271a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_f348271a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/api/auth.js":
/*!**********************************!*\
  !*** ./resources/js/api/auth.js ***!
  \**********************************/
/*! exports provided: login, otpVerify, otpResend, logout, register, refreshToken, requestPwdReset, reset, verify, resendEmail, currentUser, checkAuth, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "login", function() { return login; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "otpVerify", function() { return otpVerify; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "otpResend", function() { return otpResend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logout", function() { return logout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "register", function() { return register; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "refreshToken", function() { return refreshToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "requestPwdReset", function() { return requestPwdReset; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reset", function() { return reset; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "verify", function() { return verify; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resendEmail", function() { return resendEmail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "currentUser", function() { return currentUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkAuth", function() { return checkAuth; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @services/api.js */ "./resources/js/services/api.js");


var auth = {
  login: function login(credentials) {
    return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(_services_api_js__WEBPACK_IMPORTED_MODULE_1__["login"], credentials);
  },
  otpVerify: function otpVerify(otp) {
    return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(_services_api_js__WEBPACK_IMPORTED_MODULE_1__["otpVerify"], {
      OTP: otp
    });
  },
  otpResend: function otpResend() {
    return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(_services_api_js__WEBPACK_IMPORTED_MODULE_1__["otpResend"]);
  },
  logout: function logout() {
    return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(_services_api_js__WEBPACK_IMPORTED_MODULE_1__["logout"]);
  },
  register: function register(user) {
    return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(_services_api_js__WEBPACK_IMPORTED_MODULE_1__["register"], user);
  },
  refreshToken: function refreshToken() {
    return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(_services_api_js__WEBPACK_IMPORTED_MODULE_1__["refreshToken"]);
  },
  requestPwdReset: function requestPwdReset(email) {
    return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(_services_api_js__WEBPACK_IMPORTED_MODULE_1__["requestPasswordReset"], {
      email: email
    });
  },
  reset: function reset(user) {
    return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(_services_api_js__WEBPACK_IMPORTED_MODULE_1__["passwordReset"], {
      email: user.email,
      password: user.password,
      password_confirmation: user.password_confirmation,
      token: user.token
    });
  },
  verify: function verify(signedURL) {
    return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(signedURL);
  },
  resendEmail: function resendEmail(email) {
    return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(_services_api_js__WEBPACK_IMPORTED_MODULE_1__["resendEmail"], {
      email: email
    });
  },
  currentUser: function currentUser() {
    return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(_services_api_js__WEBPACK_IMPORTED_MODULE_1__["loggedUser"]);
  },
  checkAuth: function checkAuth() {
    return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(_services_api_js__WEBPACK_IMPORTED_MODULE_1__["checkAuth"]);
  }
};
var login = auth.login;
var otpVerify = auth.otpVerify;
var otpResend = auth.otpResend;
var logout = auth.logout;
var register = auth.register;
var refreshToken = auth.refreshToken;
var requestPwdReset = auth.requestPwdReset;
var reset = auth.reset;
var verify = auth.verify;
var resendEmail = auth.resendEmail;
var currentUser = auth.currentUser;
var checkAuth = auth.checkAuth;
/* harmony default export */ __webpack_exports__["default"] = (auth);

/***/ }),

/***/ "./resources/js/api/users.js":
/*!***********************************!*\
  !*** ./resources/js/api/users.js ***!
  \***********************************/
/*! exports provided: fetch, update, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetch", function() { return fetch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "update", function() { return update; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @services/api.js */ "./resources/js/services/api.js");


var users = {
  fetch: function fetch() {
    return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(_services_api_js__WEBPACK_IMPORTED_MODULE_1__["users"]);
  },
  update: function update(user) {
    return axios__WEBPACK_IMPORTED_MODULE_0___default.a.put("/api/v1/user", {
      name: user.name,
      email: user.email
    });
  }
};
var fetch = users.fetch;
var update = users.update;
/* harmony default export */ __webpack_exports__["default"] = (users);

/***/ }),

/***/ "./resources/js/app.js":
/*!*****************************!*\
  !*** ./resources/js/app.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sass_app_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sass/app.scss */ "./resources/sass/app.scss");
/* harmony import */ var _sass_app_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sass_app_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _js_routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @js/routes */ "./resources/js/routes/index.js");
/* harmony import */ var _js_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @js/store */ "./resources/js/store/index.js");
/* harmony import */ var _plugins_vuetify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @plugins/vuetify */ "./resources/js/plugins/vuetify.js");
/* harmony import */ var vuetify_toast_snackbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify-toast-snackbar */ "./node_modules/vuetify-toast-snackbar/dist/index.umd.js");
/* harmony import */ var vuetify_toast_snackbar__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(vuetify_toast_snackbar__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _js_App_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @js/App.vue */ "./resources/js/App.vue");
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */
__webpack_require__(/*! ./bootstrap */ "./resources/js/bootstrap.js"); // Scss


 // Vue

 // Router

 // Store

 // Vuetify

 // VuetifyToast

 // Componente principal

 // Use VuetifyToast

vue__WEBPACK_IMPORTED_MODULE_1___default.a.use(vuetify_toast_snackbar__WEBPACK_IMPORTED_MODULE_5___default.a, {
  x: false,
  dismissable: true,
  showClose: true,
  closeIcon: "mdi-close",
  multiLine: true,
  timeout: 10000
});
/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

new vue__WEBPACK_IMPORTED_MODULE_1___default.a({
  router: _js_routes__WEBPACK_IMPORTED_MODULE_2__["default"],
  store: _js_store__WEBPACK_IMPORTED_MODULE_3__["default"],
  vuetify: _plugins_vuetify__WEBPACK_IMPORTED_MODULE_4__["default"],
  render: function render(h) {
    return h(_js_App_vue__WEBPACK_IMPORTED_MODULE_6__["default"]);
  }
}).$mount("#keemble-app");

/***/ }),

/***/ "./resources/js/bootstrap.js":
/*!***********************************!*\
  !*** ./resources/js/bootstrap.js ***!
  \***********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
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


__webpack_require__(/*! @services/refresh-token-interceptor */ "./resources/js/services/refresh-token-interceptor.js");

__webpack_require__(/*! @services/request-interceptor */ "./resources/js/services/request-interceptor.js");

__webpack_require__(/*! @services/response-interceptor */ "./resources/js/services/response-interceptor.js");

axios__WEBPACK_IMPORTED_MODULE_0___default.a.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
/**
 * Next we will register the CSRF Token as a common header with Axios so that
 * all outgoing HTTP requests automatically have it attached. This is just
 * a simple convenience so we don't have to attach every token manually.
 */

var token = document.head.querySelector('meta[name="csrf-token"]');
axios__WEBPACK_IMPORTED_MODULE_0___default.a.defaults.headers.post["Content-Type"] = "application/json";
axios__WEBPACK_IMPORTED_MODULE_0___default.a.defaults.headers.common["X-CSRF-TOKEN"] = token.content;
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

/***/ }),

/***/ "./resources/js/components/dashboard/AppBar.vue":
/*!******************************************************!*\
  !*** ./resources/js/components/dashboard/AppBar.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AppBar_vue_vue_type_template_id_6c6f4410___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AppBar.vue?vue&type=template&id=6c6f4410& */ "./resources/js/components/dashboard/AppBar.vue?vue&type=template&id=6c6f4410&");
/* harmony import */ var _AppBar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AppBar.vue?vue&type=script&lang=js& */ "./resources/js/components/dashboard/AppBar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AppBar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AppBar_vue_vue_type_template_id_6c6f4410___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AppBar_vue_vue_type_template_id_6c6f4410___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/dashboard/AppBar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/dashboard/AppBar.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/dashboard/AppBar.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppBar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./AppBar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboard/AppBar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppBar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/dashboard/AppBar.vue?vue&type=template&id=6c6f4410&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/dashboard/AppBar.vue?vue&type=template&id=6c6f4410& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AppBar_vue_vue_type_template_id_6c6f4410___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./AppBar.vue?vue&type=template&id=6c6f4410& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboard/AppBar.vue?vue&type=template&id=6c6f4410&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AppBar_vue_vue_type_template_id_6c6f4410___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AppBar_vue_vue_type_template_id_6c6f4410___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/dashboard/SidebarMenu.vue":
/*!***********************************************************!*\
  !*** ./resources/js/components/dashboard/SidebarMenu.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SidebarMenu_vue_vue_type_template_id_533eb685___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SidebarMenu.vue?vue&type=template&id=533eb685& */ "./resources/js/components/dashboard/SidebarMenu.vue?vue&type=template&id=533eb685&");
/* harmony import */ var _SidebarMenu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SidebarMenu.vue?vue&type=script&lang=js& */ "./resources/js/components/dashboard/SidebarMenu.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SidebarMenu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SidebarMenu_vue_vue_type_template_id_533eb685___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SidebarMenu_vue_vue_type_template_id_533eb685___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/dashboard/SidebarMenu.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/dashboard/SidebarMenu.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/dashboard/SidebarMenu.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SidebarMenu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./SidebarMenu.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboard/SidebarMenu.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SidebarMenu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/dashboard/SidebarMenu.vue?vue&type=template&id=533eb685&":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/dashboard/SidebarMenu.vue?vue&type=template&id=533eb685& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SidebarMenu_vue_vue_type_template_id_533eb685___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./SidebarMenu.vue?vue&type=template&id=533eb685& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboard/SidebarMenu.vue?vue&type=template&id=533eb685&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SidebarMenu_vue_vue_type_template_id_533eb685___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SidebarMenu_vue_vue_type_template_id_533eb685___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/dashboard/SidebarUserMenu.vue":
/*!***************************************************************!*\
  !*** ./resources/js/components/dashboard/SidebarUserMenu.vue ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SidebarUserMenu_vue_vue_type_template_id_b6195720___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SidebarUserMenu.vue?vue&type=template&id=b6195720& */ "./resources/js/components/dashboard/SidebarUserMenu.vue?vue&type=template&id=b6195720&");
/* harmony import */ var _SidebarUserMenu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SidebarUserMenu.vue?vue&type=script&lang=js& */ "./resources/js/components/dashboard/SidebarUserMenu.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SidebarUserMenu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SidebarUserMenu_vue_vue_type_template_id_b6195720___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SidebarUserMenu_vue_vue_type_template_id_b6195720___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/dashboard/SidebarUserMenu.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/dashboard/SidebarUserMenu.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/dashboard/SidebarUserMenu.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SidebarUserMenu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./SidebarUserMenu.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboard/SidebarUserMenu.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SidebarUserMenu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/dashboard/SidebarUserMenu.vue?vue&type=template&id=b6195720&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/dashboard/SidebarUserMenu.vue?vue&type=template&id=b6195720& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SidebarUserMenu_vue_vue_type_template_id_b6195720___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./SidebarUserMenu.vue?vue&type=template&id=b6195720& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboard/SidebarUserMenu.vue?vue&type=template&id=b6195720&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SidebarUserMenu_vue_vue_type_template_id_b6195720___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SidebarUserMenu_vue_vue_type_template_id_b6195720___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/layouts/AuthLayout.vue":
/*!*********************************************!*\
  !*** ./resources/js/layouts/AuthLayout.vue ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AuthLayout_vue_vue_type_template_id_3d871156_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AuthLayout.vue?vue&type=template&id=3d871156&scoped=true& */ "./resources/js/layouts/AuthLayout.vue?vue&type=template&id=3d871156&scoped=true&");
/* harmony import */ var _AuthLayout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AuthLayout.vue?vue&type=script&lang=js& */ "./resources/js/layouts/AuthLayout.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _AuthLayout_vue_vue_type_style_index_0_id_3d871156_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AuthLayout.vue?vue&type=style&index=0&id=3d871156&lang=scss&scoped=true& */ "./resources/js/layouts/AuthLayout.vue?vue&type=style&index=0&id=3d871156&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _AuthLayout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AuthLayout_vue_vue_type_template_id_3d871156_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AuthLayout_vue_vue_type_template_id_3d871156_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "3d871156",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/layouts/AuthLayout.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/layouts/AuthLayout.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./resources/js/layouts/AuthLayout.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AuthLayout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./AuthLayout.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/layouts/AuthLayout.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AuthLayout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/layouts/AuthLayout.vue?vue&type=style&index=0&id=3d871156&lang=scss&scoped=true&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/layouts/AuthLayout.vue?vue&type=style&index=0&id=3d871156&lang=scss&scoped=true& ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AuthLayout_vue_vue_type_style_index_0_id_3d871156_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/sass-loader/dist/cjs.js??ref--6-3!../../../node_modules/vue-loader/lib??vue-loader-options!./AuthLayout.vue?vue&type=style&index=0&id=3d871156&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/layouts/AuthLayout.vue?vue&type=style&index=0&id=3d871156&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AuthLayout_vue_vue_type_style_index_0_id_3d871156_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AuthLayout_vue_vue_type_style_index_0_id_3d871156_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AuthLayout_vue_vue_type_style_index_0_id_3d871156_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AuthLayout_vue_vue_type_style_index_0_id_3d871156_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AuthLayout_vue_vue_type_style_index_0_id_3d871156_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/layouts/AuthLayout.vue?vue&type=template&id=3d871156&scoped=true&":
/*!****************************************************************************************!*\
  !*** ./resources/js/layouts/AuthLayout.vue?vue&type=template&id=3d871156&scoped=true& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AuthLayout_vue_vue_type_template_id_3d871156_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./AuthLayout.vue?vue&type=template&id=3d871156&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/layouts/AuthLayout.vue?vue&type=template&id=3d871156&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AuthLayout_vue_vue_type_template_id_3d871156_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AuthLayout_vue_vue_type_template_id_3d871156_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/layouts/DashBoardLayout.vue":
/*!**************************************************!*\
  !*** ./resources/js/layouts/DashBoardLayout.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DashBoardLayout_vue_vue_type_template_id_cb7685ec_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DashBoardLayout.vue?vue&type=template&id=cb7685ec&scoped=true& */ "./resources/js/layouts/DashBoardLayout.vue?vue&type=template&id=cb7685ec&scoped=true&");
/* harmony import */ var _DashBoardLayout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DashBoardLayout.vue?vue&type=script&lang=js& */ "./resources/js/layouts/DashBoardLayout.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _DashBoardLayout_vue_vue_type_style_index_1_id_cb7685ec_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DashBoardLayout.vue?vue&type=style&index=1&id=cb7685ec&lang=scss&scoped=true& */ "./resources/js/layouts/DashBoardLayout.vue?vue&type=style&index=1&id=cb7685ec&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _DashBoardLayout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DashBoardLayout_vue_vue_type_template_id_cb7685ec_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _DashBoardLayout_vue_vue_type_template_id_cb7685ec_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "cb7685ec",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/layouts/DashBoardLayout.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/layouts/DashBoardLayout.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/layouts/DashBoardLayout.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DashBoardLayout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./DashBoardLayout.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/layouts/DashBoardLayout.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DashBoardLayout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/layouts/DashBoardLayout.vue?vue&type=style&index=1&id=cb7685ec&lang=scss&scoped=true&":
/*!************************************************************************************************************!*\
  !*** ./resources/js/layouts/DashBoardLayout.vue?vue&type=style&index=1&id=cb7685ec&lang=scss&scoped=true& ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_DashBoardLayout_vue_vue_type_style_index_1_id_cb7685ec_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/sass-loader/dist/cjs.js??ref--6-3!../../../node_modules/vue-loader/lib??vue-loader-options!./DashBoardLayout.vue?vue&type=style&index=1&id=cb7685ec&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/layouts/DashBoardLayout.vue?vue&type=style&index=1&id=cb7685ec&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_DashBoardLayout_vue_vue_type_style_index_1_id_cb7685ec_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_DashBoardLayout_vue_vue_type_style_index_1_id_cb7685ec_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_DashBoardLayout_vue_vue_type_style_index_1_id_cb7685ec_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_DashBoardLayout_vue_vue_type_style_index_1_id_cb7685ec_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_DashBoardLayout_vue_vue_type_style_index_1_id_cb7685ec_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/layouts/DashBoardLayout.vue?vue&type=template&id=cb7685ec&scoped=true&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/layouts/DashBoardLayout.vue?vue&type=template&id=cb7685ec&scoped=true& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DashBoardLayout_vue_vue_type_template_id_cb7685ec_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./DashBoardLayout.vue?vue&type=template&id=cb7685ec&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/layouts/DashBoardLayout.vue?vue&type=template&id=cb7685ec&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DashBoardLayout_vue_vue_type_template_id_cb7685ec_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DashBoardLayout_vue_vue_type_template_id_cb7685ec_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/plugins/vuetify.js":
/*!*****************************************!*\
  !*** ./resources/js/plugins/vuetify.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuetify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuetify */ "./node_modules/vuetify/dist/vuetify.js");
/* harmony import */ var vuetify__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vuetify__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vuetify_es5_locale_es__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuetify/es5/locale/es */ "./node_modules/vuetify/es5/locale/es.js");
/* harmony import */ var vuetify_es5_locale_es__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vuetify_es5_locale_es__WEBPACK_IMPORTED_MODULE_2__);



vue__WEBPACK_IMPORTED_MODULE_0___default.a.use(vuetify__WEBPACK_IMPORTED_MODULE_1___default.a);
/* harmony default export */ __webpack_exports__["default"] = (new vuetify__WEBPACK_IMPORTED_MODULE_1___default.a({
  theme: {
    options: {
      customProperties: true
    },
    themes: {
      light: {
        primary: "#1976D2",
        secondary: "#424242",
        accent: "#82B1FF",
        error: "#FF5252",
        info: "#2196F3",
        success: "#4CAF50",
        warning: "#FFC107"
      },
      dark: {
        primary: "#1976D2",
        secondary: "#424242",
        accent: "#82B1FF",
        error: "#FF5252",
        info: "#2196F3",
        success: "#4CAF50",
        warning: "#FFC107"
      }
    }
  },
  lang: {
    locales: {
      es: vuetify_es5_locale_es__WEBPACK_IMPORTED_MODULE_2___default.a
    },
    current: "es"
  },
  icons: {
    iconfont: "mdiSvg"
  }
}));

/***/ }),

/***/ "./resources/js/routes/auth/index.js":
/*!*******************************************!*\
  !*** ./resources/js/routes/auth/index.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _layouts_AuthLayout_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @layouts/AuthLayout.vue */ "./resources/js/layouts/AuthLayout.vue");
// Importar componentes de páginas
// Componenes de Autenticacion


var LoginPage = function LoginPage() {
  return Promise.all(/*! import() | js/pages/LoginPage */[__webpack_require__.e("/js/vendor"), __webpack_require__.e("js/pages/LoginPage")]).then(__webpack_require__.bind(null, /*! @pages/auth/Login.vue */ "./resources/js/pages/auth/Login.vue"));
};

var RegisterPage = function RegisterPage() {
  return Promise.all(/*! import() | js/pages/RegisterPage */[__webpack_require__.e("/js/vendor"), __webpack_require__.e("js/pages/RegisterPage")]).then(__webpack_require__.bind(null, /*! @pages/auth/Register.vue */ "./resources/js/pages/auth/Register.vue"));
};

var RecoveryPasswordPage = function RecoveryPasswordPage() {
  return Promise.all(/*! import() | js/pages/RecoveryPasswordPage */[__webpack_require__.e("/js/vendor"), __webpack_require__.e("js/pages/RecoveryPasswordPage")]).then(__webpack_require__.bind(null, /*! @pages/auth/RecoveryPassword.vue */ "./resources/js/pages/auth/RecoveryPassword.vue"));
};

var ResetPasswordPage = function ResetPasswordPage() {
  return Promise.all(/*! import() | js/pages/ResetPasswordPage */[__webpack_require__.e("/js/vendor"), __webpack_require__.e("js/pages/ResetPasswordPage")]).then(__webpack_require__.bind(null, /*! @pages/auth/ResetPassword.vue */ "./resources/js/pages/auth/ResetPassword.vue"));
};

var routes = [{
  path: "/",
  name: "auth",
  component: _layouts_AuthLayout_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
  meta: {
    guest: true
  },
  redirect: {
    name: "login"
  },
  children: [{
    path: "/login",
    name: "login",
    component: LoginPage,
    meta: {
      guest: true
    }
  }, {
    path: "/register",
    name: "register",
    component: RegisterPage,
    meta: {
      guest: true
    }
  }, {
    path: "/request-password-reset",
    name: "request-password-reset",
    component: RecoveryPasswordPage,
    meta: {
      guest: true
    }
  }, {
    path: "/reset-password",
    name: "reset-password",
    component: ResetPasswordPage,
    meta: {
      guest: true
    }
  }]
}];
/* harmony default export */ __webpack_exports__["default"] = (routes);

/***/ }),

/***/ "./resources/js/routes/dashboard/index.js":
/*!************************************************!*\
  !*** ./resources/js/routes/dashboard/index.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _layouts_DashBoardLayout_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @layouts/DashBoardLayout.vue */ "./resources/js/layouts/DashBoardLayout.vue");
// Importar componentes de páginas
// Componenes de DashBoard


var HomePage = function HomePage() {
  return __webpack_require__.e(/*! import() | js/pages/HomePage */ "js/pages/HomePage").then(__webpack_require__.bind(null, /*! @pages/dashboard/Home.vue */ "./resources/js/pages/dashboard/Home.vue"));
};
/** Admin */


var UsersPage = function UsersPage() {
  return __webpack_require__.e(/*! import() | js/pages/UsersPage */ "js/pages/UsersPage").then(__webpack_require__.bind(null, /*! @pages/dashboard/admin/Users.vue */ "./resources/js/pages/dashboard/admin/Users.vue"));
};

var RolesAndPermissionsPage = function RolesAndPermissionsPage() {
  return __webpack_require__.e(/*! import() | js/pages/RolesAndPermissionsPage */ "js/pages/RolesAndPermissionsPage").then(__webpack_require__.bind(null, /*! @pages/dashboard/admin/RolesAndPermissions.vue */ "./resources/js/pages/dashboard/admin/RolesAndPermissions.vue"));
};
/** Clientes */


var DevicesPage = function DevicesPage() {
  return __webpack_require__.e(/*! import() | js/pages/DevicesPage */ "js/pages/DevicesPage").then(__webpack_require__.bind(null, /*! @pages/dashboard/costumer/Devices.vue */ "./resources/js/pages/dashboard/costumer/Devices.vue"));
};

var HeadQuartersPage = function HeadQuartersPage() {
  return __webpack_require__.e(/*! import() | js/pages/HeadQuartersPage */ "js/pages/HeadQuartersPage").then(__webpack_require__.bind(null, /*! @pages/dashboard/costumer/HeadQuarters.vue */ "./resources/js/pages/dashboard/costumer/HeadQuarters.vue"));
};

var StaffPage = function StaffPage() {
  return __webpack_require__.e(/*! import() | js/pages/StaffPage */ "js/pages/StaffPage").then(__webpack_require__.bind(null, /*! @pages/dashboard/costumer/Staff.vue */ "./resources/js/pages/dashboard/costumer/Staff.vue"));
};

var SuppliersPage = function SuppliersPage() {
  return __webpack_require__.e(/*! import() | js/pages/SuppliersPage */ "js/pages/SuppliersPage").then(__webpack_require__.bind(null, /*! @pages/dashboard/costumer/Suppliers.vue */ "./resources/js/pages/dashboard/costumer/Suppliers.vue"));
};

var WorkStationsPage = function WorkStationsPage() {
  return __webpack_require__.e(/*! import() | js/pages/WorkStationsPage */ "js/pages/WorkStationsPage").then(__webpack_require__.bind(null, /*! @pages/dashboard/costumer/WorkStations.vue */ "./resources/js/pages/dashboard/costumer/WorkStations.vue"));
};
/** Soporte y servicio */


var AboutPage = function AboutPage() {
  return __webpack_require__.e(/*! import() | js/pages/AboutPage */ "js/pages/AboutPage").then(__webpack_require__.bind(null, /*! @pages/dashboard/About.vue */ "./resources/js/pages/dashboard/About.vue"));
};

var routes = [{
  path: "/",
  name: "dashboard",
  component: _layouts_DashBoardLayout_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
  meta: {
    guest: true
  },
  redirect: {
    name: "home"
  },
  children: [{
    path: "/home",
    name: "home",
    component: HomePage,
    meta: {
      requiresAuth: true
    }
  }, {
    path: "/admin",
    name: "admin",
    redirect: {
      name: "admin-users"
    },
    component: UsersPage,
    meta: {
      requiresAuth: true
    }
  }, {
    path: "/admin/users",
    name: "admin-users",
    component: UsersPage,
    meta: {
      requiresAuth: true
    }
  }, {
    path: "/admin/roles-permissions",
    name: "admin-roles",
    component: RolesAndPermissionsPage,
    meta: {
      requiresAuth: true
    }
  }, {
    path: "/admin/permisions",
    name: "admin-permisions",
    component: UsersPage,
    meta: {
      requiresAuth: true
    }
  }, {
    path: "/devices",
    name: "devices",
    component: DevicesPage,
    meta: {
      requiresAuth: true
    }
  }, {
    path: "/headquarters",
    name: "headquarters",
    component: HeadQuartersPage,
    meta: {
      requiresAuth: true
    }
  }, {
    path: "/staff",
    name: "staff",
    component: StaffPage,
    meta: {
      requiresAuth: true
    }
  }, {
    path: "/suppliers",
    name: "suppliers",
    component: SuppliersPage,
    meta: {
      requiresAuth: true
    }
  }, {
    path: "/work-stations",
    name: "work-stations",
    component: WorkStationsPage,
    meta: {
      requiresAuth: true
    }
  }, {
    path: "/about",
    name: "about",
    component: AboutPage,
    meta: {
      requiresAuth: true
    }
  }]
}];
/* harmony default export */ __webpack_exports__["default"] = (routes);

/***/ }),

/***/ "./resources/js/routes/errors/index.js":
/*!*********************************************!*\
  !*** ./resources/js/routes/errors/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// Importar componentes de páginas
var Error404Page = function Error404Page() {
  return __webpack_require__.e(/*! import() | js/pages/Error404Page */ "js/pages/Error404Page").then(__webpack_require__.bind(null, /*! @pages/errors/404.vue */ "./resources/js/pages/errors/404.vue"));
};

var routes = [{
  path: "*",
  name: "notfound",
  component: Error404Page
}];
/* harmony default export */ __webpack_exports__["default"] = (routes);

/***/ }),

/***/ "./resources/js/routes/index.js":
/*!**************************************!*\
  !*** ./resources/js/routes/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vue_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-router */ "./node_modules/vue-router/dist/vue-router.esm.js");
/* harmony import */ var _js_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @js/store */ "./resources/js/store/index.js");
/* harmony import */ var _js_routes_routes_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @js/routes/routes.js */ "./resources/js/routes/routes.js");



 // import * as actions from "@store/action-types";


vue__WEBPACK_IMPORTED_MODULE_1___default.a.use(vue_router__WEBPACK_IMPORTED_MODULE_2__["default"]);
var router = new vue_router__WEBPACK_IMPORTED_MODULE_2__["default"]({
  mode: "hash",
  routes: _js_routes_routes_js__WEBPACK_IMPORTED_MODULE_4__["default"]
}); // Función antes de cargar la ruta

router.beforeEach(function _callee(to, from, next) {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          // await store.dispatch(actions.CHECK_AUTH);
          if (to.matched.some(function (record) {
            return record.meta.requiresAuth;
          })) {
            if (!(_js_store__WEBPACK_IMPORTED_MODULE_3__["default"].getters.logged && _js_store__WEBPACK_IMPORTED_MODULE_3__["default"].getters.verifiedOTP)) {
              next({
                name: "login",
                query: {
                  redirect: to.fullPath
                }
              });
            } else {
              next();
            }
          } else if (to.matched.some(function (record) {
            return record.meta.guest;
          })) {
            if (!(_js_store__WEBPACK_IMPORTED_MODULE_3__["default"].getters.logged && _js_store__WEBPACK_IMPORTED_MODULE_3__["default"].getters.verifiedOTP)) {
              next();
            } else {
              next({
                name: "home"
              });
            }
          } else {
            next();
          }

        case 1:
        case "end":
          return _context.stop();
      }
    }
  });
});
/* harmony default export */ __webpack_exports__["default"] = (router);

/***/ }),

/***/ "./resources/js/routes/others/index.js":
/*!*********************************************!*\
  !*** ./resources/js/routes/others/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _layouts_AuthLayout_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @layouts/AuthLayout.vue */ "./resources/js/layouts/AuthLayout.vue");
// Importar componentes de páginas


var VerifyEmailPage = function VerifyEmailPage() {
  return Promise.all(/*! import() | js/pages/VerifyEmailPage */[__webpack_require__.e("/js/vendor"), __webpack_require__.e("js/pages/VerifyEmailPage")]).then(__webpack_require__.bind(null, /*! @pages/others/VerifyEmail.vue */ "./resources/js/pages/others/VerifyEmail.vue"));
};

var SendEmailPage = function SendEmailPage() {
  return Promise.all(/*! import() | js/pages/SendEmailPage */[__webpack_require__.e("/js/vendor"), __webpack_require__.e("js/pages/SendEmailPage")]).then(__webpack_require__.bind(null, /*! @pages/others/SendEmail.vue */ "./resources/js/pages/others/SendEmail.vue"));
};

var routes = [{
  path: "/",
  name: "especial",
  component: _layouts_AuthLayout_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
  children: [{
    path: "/email/verify",
    name: "verify",
    component: VerifyEmailPage
  }, {
    path: "/email/resend",
    name: "resend-email",
    component: SendEmailPage
  }]
}]; // about
// admin
// admin/index
// admin/users
// costumer
// costumer/devices
// costumer/head-quarters
// costumer/staff
// costumer/suppliers
// costumer/work-stations
// events
// home
// inventory
// organizations
// support-and-services
// support-and-services/contact-and-monitoring
// support-and-services/contracts-and-services
// support-and-services/devices-lending
// support-and-services/reports
// support-and-services/support-and-diagnostics
// support-and-services/warranty
// errors

/* harmony default export */ __webpack_exports__["default"] = (routes);

/***/ }),

/***/ "./resources/js/routes/routes.js":
/*!***************************************!*\
  !*** ./resources/js/routes/routes.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _routes_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @routes/auth */ "./resources/js/routes/auth/index.js");
/* harmony import */ var _routes_dashboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @routes/dashboard */ "./resources/js/routes/dashboard/index.js");
/* harmony import */ var _routes_others__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @routes/others */ "./resources/js/routes/others/index.js");
/* harmony import */ var _routes_errors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @routes/errors */ "./resources/js/routes/errors/index.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

// Importar rutas




var routes = [].concat(_toConsumableArray(_routes_auth__WEBPACK_IMPORTED_MODULE_0__["default"]), _toConsumableArray(_routes_dashboard__WEBPACK_IMPORTED_MODULE_1__["default"]), _toConsumableArray(_routes_others__WEBPACK_IMPORTED_MODULE_2__["default"]), _toConsumableArray(_routes_errors__WEBPACK_IMPORTED_MODULE_3__["default"]));
/* harmony default export */ __webpack_exports__["default"] = (routes);

/***/ }),

/***/ "./resources/js/services/api.js":
/*!**************************************!*\
  !*** ./resources/js/services/api.js ***!
  \**************************************/
/*! exports provided: login, otpVerify, otpResend, logout, register, refreshToken, requestPasswordReset, passwordReset, resendEmail, loggedUser, checkAuth, users, cargos, ciudades, contratos, dispositivos, estacionTrabajos, estados, funcionarios, garantias, modelos, operadores, paises, personas, productos, proovedores, sedes, servicios, tags, terceros, tipoProductos, tipoServicios, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "login", function() { return login; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "otpVerify", function() { return otpVerify; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "otpResend", function() { return otpResend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logout", function() { return logout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "register", function() { return register; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "refreshToken", function() { return refreshToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "requestPasswordReset", function() { return requestPasswordReset; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "passwordReset", function() { return passwordReset; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resendEmail", function() { return resendEmail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loggedUser", function() { return loggedUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkAuth", function() { return checkAuth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "users", function() { return users; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cargos", function() { return cargos; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ciudades", function() { return ciudades; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "contratos", function() { return contratos; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dispositivos", function() { return dispositivos; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "estacionTrabajos", function() { return estacionTrabajos; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "estados", function() { return estados; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "funcionarios", function() { return funcionarios; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "garantias", function() { return garantias; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "modelos", function() { return modelos; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "operadores", function() { return operadores; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "paises", function() { return paises; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "personas", function() { return personas; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "productos", function() { return productos; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "proovedores", function() { return proovedores; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sedes", function() { return sedes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "servicios", function() { return servicios; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tags", function() { return tags; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "terceros", function() { return terceros; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tipoProductos", function() { return tipoProductos; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tipoServicios", function() { return tipoServicios; });
/**
 * javascript comment
 * @Author: Cristian David Home
 * @Date: 2019-09-09 22:06:17
 * @Desc: Coleccion de endpoints API del aplicativo.
 */
var baseDomain = "".concat("https://kimblee.herokuapp.com/");
var apiVersion = "api";
var baseUrl = "".concat(baseDomain, "/").concat(apiVersion);
var endpoints = {
  // Auth
  login: "".concat(baseUrl, "/login"),
  otpVerify: "".concat(baseUrl, "/otp/verify"),
  otpResend: "".concat(baseUrl, "/otp/sendotp"),
  logout: "".concat(baseUrl, "/logout"),
  register: "".concat(baseUrl, "/register"),
  refreshToken: "".concat(baseUrl, "/refresh-token"),
  requestPasswordReset: "".concat(baseUrl, "/password/email"),
  passwordReset: "".concat(baseUrl, "/password/reset"),
  loggedUser: "".concat(baseUrl, "/current-user"),
  checkAuth: "".concat(baseUrl, "/auth-check"),
  verifyEmail: "".concat(baseDomain, "/email/verify"),
  resendEmail: "".concat(baseUrl, "/verification/resend"),
  // App
  users: "".concat(baseUrl, "/users"),
  cargos: "".concat(baseUrl, "/cargos"),
  ciudades: "".concat(baseUrl, "/ciudades"),
  contratos: "".concat(baseUrl, "/contratos"),
  dispositivos: "".concat(baseUrl, "/dispositivos"),
  estacionTrabajos: "".concat(baseUrl, "/estacion-trabajos"),
  estados: "".concat(baseUrl, "/estados"),
  funcionarios: "".concat(baseUrl, "/funcionarios"),
  garantias: "".concat(baseUrl, "/garantias"),
  modelos: "".concat(baseUrl, "/modelos"),
  operadores: "".concat(baseUrl, "/operadores"),
  paises: "".concat(baseUrl, "/paises"),
  personas: "".concat(baseUrl, "/personas"),
  productos: "".concat(baseUrl, "/productos"),
  proovedores: "".concat(baseUrl, "/proovedores"),
  sedes: "".concat(baseUrl, "/sedes"),
  servicios: "".concat(baseUrl, "/servicios"),
  tags: "".concat(baseUrl, "/tags"),
  terceros: "".concat(baseUrl, "/terceros"),
  tipoProductos: "".concat(baseUrl, "/tipo-productos"),
  tipoServicios: "".concat(baseUrl, "/tipo-servicios")
}; // Auth

var login = endpoints.login;
var otpVerify = endpoints.otpVerify;
var otpResend = endpoints.otpResend;
var logout = endpoints.logout;
var register = endpoints.register;
var refreshToken = endpoints.refreshToken;
var requestPasswordReset = endpoints.requestPasswordReset;
var passwordReset = endpoints.passwordReset;
var resendEmail = endpoints.resendEmail;
var loggedUser = endpoints.loggedUser;
var checkAuth = endpoints.checkAuth; // APP

var users = endpoints.users;
var cargos = endpoints.cargos;
var ciudades = endpoints.ciudades;
var contratos = endpoints.contratos;
var dispositivos = endpoints.dispositivos;
var estacionTrabajos = endpoints.estacionTrabajos;
var estados = endpoints.estados;
var funcionarios = endpoints.funcionarios;
var garantias = endpoints.garantias;
var modelos = endpoints.modelos;
var operadores = endpoints.operadores;
var paises = endpoints.paises;
var personas = endpoints.personas;
var productos = endpoints.productos;
var proovedores = endpoints.proovedores;
var sedes = endpoints.sedes;
var servicios = endpoints.servicios;
var tags = endpoints.tags;
var terceros = endpoints.terceros;
var tipoProductos = endpoints.tipoProductos;
var tipoServicios = endpoints.tipoServicios;
/* harmony default export */ __webpack_exports__["default"] = (endpoints);

/***/ }),

/***/ "./resources/js/services/event-bus.js":
/*!********************************************!*\
  !*** ./resources/js/services/event-bus.js ***!
  \********************************************/
/*! exports provided: EventBus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventBus", function() { return EventBus; });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);

var EventBus = new vue__WEBPACK_IMPORTED_MODULE_0___default.a();

/***/ }),

/***/ "./resources/js/services/refresh-token-interceptor.js":
/*!************************************************************!*\
  !*** ./resources/js/services/refresh-token-interceptor.js ***!
  \************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _api_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @api/auth */ "./resources/js/api/auth.js");
/* harmony import */ var axios_auth_refresh__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios-auth-refresh */ "./node_modules/axios-auth-refresh/dist/index.min.js");
/* harmony import */ var axios_auth_refresh__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios_auth_refresh__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _store_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @store/index */ "./resources/js/store/index.js");
/* harmony import */ var _store_mutation_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @store/mutation-types */ "./resources/js/store/mutation-types.js");






var refresLogic = function refresLogic(request) {
  return _api_auth__WEBPACK_IMPORTED_MODULE_1__["default"].refreshToken().then(function (response) {
    var accessToken = response.data.access_token;
    _store_index__WEBPACK_IMPORTED_MODULE_3__["default"].commit(_store_mutation_types__WEBPACK_IMPORTED_MODULE_4__["ACCESS_TOKEN"], accessToken);
    request.response.config.headers["Authorization"] = "Bearer ".concat(accessToken);
    return Promise.resolve();
  });
};

axios_auth_refresh__WEBPACK_IMPORTED_MODULE_2___default()(axios__WEBPACK_IMPORTED_MODULE_0___default.a, refresLogic);

/***/ }),

/***/ "./resources/js/services/request-interceptor.js":
/*!******************************************************!*\
  !*** ./resources/js/services/request-interceptor.js ***!
  \******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _store_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @store/index */ "./resources/js/store/index.js");

 // Global request interceptor

axios__WEBPACK_IMPORTED_MODULE_0___default.a.interceptors.request.use(function (config) {
  var accessToken = _store_index__WEBPACK_IMPORTED_MODULE_1__["default"].getters.accessToken;

  if (accessToken) {
    config.headers["Authorization"] = "Bearer ".concat(accessToken);
  }

  return config;
}, function (error) {
  return Promise.reject(error);
});

/***/ }),

/***/ "./resources/js/services/response-interceptor.js":
/*!*******************************************************!*\
  !*** ./resources/js/services/response-interceptor.js ***!
  \*******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
 // Global response interceptor

axios__WEBPACK_IMPORTED_MODULE_0___default.a.interceptors.response.use(function (response) {
  console.log(response);

  switch (response.status) {
    // OK
    case 200:
      break;
    // Created

    case 201:
      break;
    // Accepted

    case 202:
      break;
    // Non-Authoritative Information

    case 203:
      break;
    // No Content

    case 204:
      break;
    // Reset Content

    case 205:
      break;
    // Partial Content

    case 206:
      break;
    // Multi-Status (WebDAV)

    case 207:
      break;
    // Multi-Status (WebDAV)

    case 208:
      break;
    // IM Used (HTTP Delta encoding)

    case 226:
      break;

    default:
      break;
  }

  return response;
}, function (error) {
  console.log(error);
  console.log(error.response);

  switch (error.response.status) {
    case 400:
      // Bad Request
      break;

    case 401:
      // Unauthorized
      break;

    case 402:
      // Payment Required
      break;

    case 403:
      // Forbidden
      break;

    case 404:
      // Not Found
      break;

    case 405:
      // Method Not Allowed
      break;

    case 406:
      // Not Acceptable
      break;

    case 407:
      // Proxy Authentication Required
      break;

    case 408:
      // Request Timeout
      break;

    case 409:
      // Conflict
      break;

    case 410:
      // Gone
      break;

    case 411:
      // Length Required
      break;

    case 412:
      // Precondition Failed
      break;

    case 413:
      // Payload Too Large
      break;

    case 414:
      // URI Too Long
      break;

    case 415:
      // Unsupported Media Type
      break;

    case 416:
      // Requested Range Not Satisfiable
      break;

    case 417:
      // Expectation Failed
      break;

    case 418:
      // I'm a teapot
      break;

    case 421:
      // Misdirected Request
      break;

    case 422:
      // Unprocessable Entity (WebDAV)
      break;

    case 423:
      // Locked (WebDAV)
      break;

    case 424:
      // Failed Dependency (WebDAV)
      break;

    case 426:
      // Upgrade Required
      break;

    case 428:
      // Precondition Required
      break;

    case 429:
      // Too Many Requests
      break;

    case 431:
      // Request Header Fields Too Large
      break;

    case 451:
      // Unavailable For Legal Reasons
      break;

    case 500: // Internal Server Error

    case 501: // Not Implemented

    case 502: // Bad Gateway

    case 503: // Service Unavailable

    case 504: // Gateway Timeout

    case 505: // HTTP Version Not Supported

    case 506: // Variant Also Negotiates

    case 507: // Insufficient Storage

    case 508: // Loop Detected (WebDAV)

    case 510: // Not Extended

    case 511:
      // Network Authentication Required
      break;

    default:
      break;
  }

  return Promise.reject(error);
}); // export default function execute() {
//     axios.interceptors.request.use(function(config) {
//         const token = this.$store.state.token;
//         if(token) {
//             config.headers.Authorization = `Bearer ${token}`;
//         }
//         return config;
//     }, function(err) {
//         return Promise.reject(err);
//     });
// }

/***/ }),

/***/ "./resources/js/store/action-types.js":
/*!********************************************!*\
  !*** ./resources/js/store/action-types.js ***!
  \********************************************/
/*! exports provided: SWITCH_DARK_THEME, SET_DARK_THEME, LOGIN, VERIFY_OTP, RESEND_OTP, LOGOUT, REGISTER, REQUEST_PWD_RESET, RESET_PASSWORD, SET_CURRENT_USER, CHECK_AUTH, VERIFY_EMAIL, RESEND_EMAIL, FETCH_USERS, UPDATE_USER, SELECTED_USER */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SWITCH_DARK_THEME", function() { return SWITCH_DARK_THEME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_DARK_THEME", function() { return SET_DARK_THEME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGIN", function() { return LOGIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VERIFY_OTP", function() { return VERIFY_OTP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RESEND_OTP", function() { return RESEND_OTP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGOUT", function() { return LOGOUT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REGISTER", function() { return REGISTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REQUEST_PWD_RESET", function() { return REQUEST_PWD_RESET; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RESET_PASSWORD", function() { return RESET_PASSWORD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_CURRENT_USER", function() { return SET_CURRENT_USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHECK_AUTH", function() { return CHECK_AUTH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VERIFY_EMAIL", function() { return VERIFY_EMAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RESEND_EMAIL", function() { return RESEND_EMAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_USERS", function() { return FETCH_USERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_USER", function() { return UPDATE_USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SELECTED_USER", function() { return SELECTED_USER; });
// APP MODULE
var SWITCH_DARK_THEME = "SWITCH_DARK_THEME";
var SET_DARK_THEME = "SET_DARK_THEME"; // AUTH MODULE

var LOGIN = "LOGIN";
var VERIFY_OTP = "VERIFY_OTP";
var RESEND_OTP = "RESEND_OTP";
var LOGOUT = "LOGOUT";
var REGISTER = "REGISTER";
var REQUEST_PWD_RESET = "REQUEST_PWD_RESET";
var RESET_PASSWORD = "RESET_PASSWORD";
var SET_CURRENT_USER = "SET_CURRENT_USER";
var CHECK_AUTH = "CHECK_AUTH";
var VERIFY_EMAIL = "VERIFY_EMAIL";
var RESEND_EMAIL = "RESEND_EMAIL"; // USERS MODULE

var FETCH_USERS = "FETCH_USERS";
var UPDATE_USER = "UPDATE_USER";
var SELECTED_USER = "SELECTED_USER";

/***/ }),

/***/ "./resources/js/store/index.js":
/*!*************************************!*\
  !*** ./resources/js/store/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var vuex_persist__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuex-persist */ "./node_modules/vuex-persist/dist/esm/index.js");
/* harmony import */ var _store_modules_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @store/modules/app */ "./resources/js/store/modules/app/index.js");
/* harmony import */ var _store_modules_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @store/modules/auth */ "./resources/js/store/modules/auth/index.js");
/* harmony import */ var _store_modules_snackbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @store/modules/snackbar */ "./resources/js/store/modules/snackbar/index.js");
/* harmony import */ var _store_modules_users__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @store/modules/users */ "./resources/js/store/modules/users/index.js");







vue__WEBPACK_IMPORTED_MODULE_0___default.a.use(vuex__WEBPACK_IMPORTED_MODULE_1__["default"]);
var vuexPersist = new vuex_persist__WEBPACK_IMPORTED_MODULE_2__["default"]({
  key: "keemble-app",
  storage: localStorage
});
var debug = "development" !== "production";
/* harmony default export */ __webpack_exports__["default"] = (new vuex__WEBPACK_IMPORTED_MODULE_1__["default"].Store({
  modules: {
    app: _store_modules_app__WEBPACK_IMPORTED_MODULE_3__["default"],
    auth: _store_modules_auth__WEBPACK_IMPORTED_MODULE_4__["default"],
    snackbar: _store_modules_snackbar__WEBPACK_IMPORTED_MODULE_5__["default"],
    users: _store_modules_users__WEBPACK_IMPORTED_MODULE_6__["default"]
  },
  strict: debug,
  plugins: [vuexPersist.plugin]
}));

/***/ }),

/***/ "./resources/js/store/modules/app/actions.js":
/*!***************************************************!*\
  !*** ./resources/js/store/modules/app/actions.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _store_mutation_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @store/mutation-types */ "./resources/js/store/mutation-types.js");
/* harmony import */ var _store_action_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @store/action-types */ "./resources/js/store/action-types.js");
var _actions$SET_DARK_THE;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



/* harmony default export */ __webpack_exports__["default"] = (_actions$SET_DARK_THE = {}, _defineProperty(_actions$SET_DARK_THE, _store_action_types__WEBPACK_IMPORTED_MODULE_1__["SET_DARK_THEME"], function (_ref, val) {
  var commit = _ref.commit;
  return new Promise(function (resolve) {
    commit(_store_mutation_types__WEBPACK_IMPORTED_MODULE_0__["SET_DARK_THEME"], val);
    resolve();
  });
}), _defineProperty(_actions$SET_DARK_THE, _store_action_types__WEBPACK_IMPORTED_MODULE_1__["SWITCH_DARK_THEME"], function (_ref2) {
  var dispatch = _ref2.dispatch,
      getters = _ref2.getters;
  return new Promise(function (resolve) {
    dispatch(_store_action_types__WEBPACK_IMPORTED_MODULE_1__["SET_DARK_THEME"], !getters.darkTheme);
    resolve();
  });
}), _actions$SET_DARK_THE);

/***/ }),

/***/ "./resources/js/store/modules/app/getters.js":
/*!***************************************************!*\
  !*** ./resources/js/store/modules/app/getters.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  getDarkTheme: function getDarkTheme(state) {
    return state.darkTheme;
  }
});

/***/ }),

/***/ "./resources/js/store/modules/app/index.js":
/*!*************************************************!*\
  !*** ./resources/js/store/modules/app/index.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _getters__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getters */ "./resources/js/store/modules/app/getters.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actions */ "./resources/js/store/modules/app/actions.js");
/* harmony import */ var _mutations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mutations */ "./resources/js/store/modules/app/mutations.js");



var state = {
  darkTheme: false
};
/* harmony default export */ __webpack_exports__["default"] = ({
  state: state,
  getters: _getters__WEBPACK_IMPORTED_MODULE_0__["default"],
  actions: _actions__WEBPACK_IMPORTED_MODULE_1__["default"],
  mutations: _mutations__WEBPACK_IMPORTED_MODULE_2__["default"]
});

/***/ }),

/***/ "./resources/js/store/modules/app/mutations.js":
/*!*****************************************************!*\
  !*** ./resources/js/store/modules/app/mutations.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _store_mutation_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @store/mutation-types */ "./resources/js/store/mutation-types.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


/* harmony default export */ __webpack_exports__["default"] = (_defineProperty({}, _store_mutation_types__WEBPACK_IMPORTED_MODULE_0__["SET_DARK_THEME"], function (state, val) {
  state.darkTheme = val;
}));

/***/ }),

/***/ "./resources/js/store/modules/auth/actions.js":
/*!****************************************************!*\
  !*** ./resources/js/store/modules/auth/actions.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _store_mutation_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @store/mutation-types */ "./resources/js/store/mutation-types.js");
/* harmony import */ var _store_action_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @store/action-types */ "./resources/js/store/action-types.js");
/* harmony import */ var _services_event_bus__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services/event-bus */ "./resources/js/services/event-bus.js");
/* harmony import */ var _api_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @api/auth */ "./resources/js/api/auth.js");
var _actions$LOGIN$action;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





/* harmony default export */ __webpack_exports__["default"] = (_actions$LOGIN$action = {}, _defineProperty(_actions$LOGIN$action, _store_action_types__WEBPACK_IMPORTED_MODULE_1__["LOGIN"], function (_ref, credentials) {
  var commit = _ref.commit;
  return new Promise(function (resolve, reject) {
    Object(_api_auth__WEBPACK_IMPORTED_MODULE_3__["login"])(credentials).then(function (response) {
      if (response.data.access_token) {
        commit(_store_mutation_types__WEBPACK_IMPORTED_MODULE_0__["LOGGED"], true);
        commit(_store_mutation_types__WEBPACK_IMPORTED_MODULE_0__["ATTEMPT_USER"], {
          email: credentials.email
        });
        commit(_store_mutation_types__WEBPACK_IMPORTED_MODULE_0__["ACCESS_TOKEN"], response.data.access_token);
        resolve(response);
      } else {
        reject("Token not provided");
      }
    })["catch"](function (error) {
      reject(error);
    });
  });
}), _defineProperty(_actions$LOGIN$action, _store_action_types__WEBPACK_IMPORTED_MODULE_1__["VERIFY_OTP"], function (_ref2, otp) {
  var commit = _ref2.commit,
      dispatch = _ref2.dispatch;
  return new Promise(function (resolve, reject) {
    Object(_api_auth__WEBPACK_IMPORTED_MODULE_3__["otpVerify"])(otp).then(function (response) {
      commit(_store_mutation_types__WEBPACK_IMPORTED_MODULE_0__["OTP_VERIFIED"], true);
      dispatch(_store_action_types__WEBPACK_IMPORTED_MODULE_1__["SET_CURRENT_USER"]);
      resolve(response);
    })["catch"](function (error) {
      commit(_store_mutation_types__WEBPACK_IMPORTED_MODULE_0__["OTP_VERIFIED"], false);
      reject(error);
    });
  });
}), _defineProperty(_actions$LOGIN$action, _store_action_types__WEBPACK_IMPORTED_MODULE_1__["RESEND_OTP"], function () {
  return new Promise(function (resolve, reject) {
    Object(_api_auth__WEBPACK_IMPORTED_MODULE_3__["otpResend"])().then(function (response) {
      resolve(response);
    })["catch"](function (error) {
      reject(error);
    });
  });
}), _defineProperty(_actions$LOGIN$action, _store_action_types__WEBPACK_IMPORTED_MODULE_1__["LOGOUT"], function (_ref3) {
  var commit = _ref3.commit;
  return new Promise(function (resolve, reject) {
    Object(_api_auth__WEBPACK_IMPORTED_MODULE_3__["logout"])().then(function (response) {
      resolve(response);
    })["catch"](function (error) {
      reject(error);
    })["finally"](function () {
      commit(_store_mutation_types__WEBPACK_IMPORTED_MODULE_0__["USER"], null);
      commit(_store_mutation_types__WEBPACK_IMPORTED_MODULE_0__["ATTEMPT_USER"], null);
      commit(_store_mutation_types__WEBPACK_IMPORTED_MODULE_0__["OTP_VERIFIED"], false);
      commit(_store_mutation_types__WEBPACK_IMPORTED_MODULE_0__["ACCESS_TOKEN"], null);
      commit(_store_mutation_types__WEBPACK_IMPORTED_MODULE_0__["LOGGED"], false);
      _services_event_bus__WEBPACK_IMPORTED_MODULE_2__["EventBus"].$emit("logged-out");
    });
  });
}), _defineProperty(_actions$LOGIN$action, _store_action_types__WEBPACK_IMPORTED_MODULE_1__["REGISTER"], function (_ref4, user) {
  var commit = _ref4.commit;
  return new Promise(function (resolve, reject) {
    Object(_api_auth__WEBPACK_IMPORTED_MODULE_3__["register"])(user).then(function (response) {
      commit(_store_mutation_types__WEBPACK_IMPORTED_MODULE_0__["LOGGED"], false);
      resolve(response);
    })["catch"](function (error) {
      reject(error);
    });
  });
}), _defineProperty(_actions$LOGIN$action, _store_action_types__WEBPACK_IMPORTED_MODULE_1__["REQUEST_PWD_RESET"], function (context, email) {
  return new Promise(function (resolve, reject) {
    Object(_api_auth__WEBPACK_IMPORTED_MODULE_3__["requestPwdReset"])(email).then(function (response) {
      resolve(response);
    })["catch"](function (error) {
      reject(error);
    });
  });
}), _defineProperty(_actions$LOGIN$action, _store_action_types__WEBPACK_IMPORTED_MODULE_1__["RESET_PASSWORD"], function (context, user) {
  return new Promise(function (resolve, reject) {
    Object(_api_auth__WEBPACK_IMPORTED_MODULE_3__["reset"])(user).then(function (response) {
      resolve(response);
    })["catch"](function (error) {
      reject(error);
    });
  });
}), _defineProperty(_actions$LOGIN$action, _store_action_types__WEBPACK_IMPORTED_MODULE_1__["VERIFY_EMAIL"], function (context, signedURL) {
  return new Promise(function (resolve, reject) {
    Object(_api_auth__WEBPACK_IMPORTED_MODULE_3__["verify"])(signedURL).then(function (response) {
      resolve(response);
    })["catch"](function (error) {
      reject(error);
    });
  });
}), _defineProperty(_actions$LOGIN$action, _store_action_types__WEBPACK_IMPORTED_MODULE_1__["RESEND_EMAIL"], function (context, email) {
  return new Promise(function (resolve, reject) {
    Object(_api_auth__WEBPACK_IMPORTED_MODULE_3__["resendEmail"])(email).then(function (response) {
      resolve(response);
    })["catch"](function (error) {
      reject(error);
    });
  });
}), _defineProperty(_actions$LOGIN$action, _store_action_types__WEBPACK_IMPORTED_MODULE_1__["SET_CURRENT_USER"], function (_ref5) {
  var commit = _ref5.commit;
  return new Promise(function (resolve, reject) {
    Object(_api_auth__WEBPACK_IMPORTED_MODULE_3__["currentUser"])().then(function (response) {
      commit(_store_mutation_types__WEBPACK_IMPORTED_MODULE_0__["USER"], response.data.data);
      resolve(response);
    })["catch"](function (error) {
      reject(error);
    });
  });
}), _defineProperty(_actions$LOGIN$action, _store_action_types__WEBPACK_IMPORTED_MODULE_1__["CHECK_AUTH"], function (_ref6) {
  var commit = _ref6.commit,
      dispatch = _ref6.dispatch;
  return new Promise(function (resolve, reject) {
    Object(_api_auth__WEBPACK_IMPORTED_MODULE_3__["checkAuth"])().then(function (response) {
      commit(_store_mutation_types__WEBPACK_IMPORTED_MODULE_0__["LOGGED"], true);
      dispatch(_store_action_types__WEBPACK_IMPORTED_MODULE_1__["SET_CURRENT_USER"]);
      resolve(response);
    })["catch"](function (error) {
      switch (error.response.status) {
        case 401:
          commit(_store_mutation_types__WEBPACK_IMPORTED_MODULE_0__["LOGGED"], true);
          commit(_store_mutation_types__WEBPACK_IMPORTED_MODULE_0__["USER"], null);
          commit(_store_mutation_types__WEBPACK_IMPORTED_MODULE_0__["ATTEMPT_USER"], null);
          commit(_store_mutation_types__WEBPACK_IMPORTED_MODULE_0__["OTP_VERIFIED"], false);
          commit(_store_mutation_types__WEBPACK_IMPORTED_MODULE_0__["ACCESS_TOKEN"], null);
          commit(_store_mutation_types__WEBPACK_IMPORTED_MODULE_0__["LOGGED"], false);
          break;

        default:
          break;
      }

      reject(error);
    });
  });
}), _actions$LOGIN$action);

/***/ }),

/***/ "./resources/js/store/modules/auth/getters.js":
/*!****************************************************!*\
  !*** ./resources/js/store/modules/auth/getters.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  logged: function logged(state) {
    return state.logged;
  },
  attemptUser: function attemptUser(state) {
    return state.attemptUser;
  },
  verifiedOTP: function verifiedOTP(state) {
    return state.otpverified;
  },
  accessToken: function accessToken(state) {
    return state.accessToken;
  },
  user: function user(state) {
    return state.user;
  },
  roles: function roles(state) {
    return state.user ? state.user.roles : [];
  }
});

/***/ }),

/***/ "./resources/js/store/modules/auth/index.js":
/*!**************************************************!*\
  !*** ./resources/js/store/modules/auth/index.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _getters__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getters */ "./resources/js/store/modules/auth/getters.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actions */ "./resources/js/store/modules/auth/actions.js");
/* harmony import */ var _mutations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mutations */ "./resources/js/store/modules/auth/mutations.js");



var state = {
  accessToken: null,
  attemptUser: null,
  user: null,
  logged: false,
  otpverified: false
};
/* harmony default export */ __webpack_exports__["default"] = ({
  state: state,
  getters: _getters__WEBPACK_IMPORTED_MODULE_0__["default"],
  actions: _actions__WEBPACK_IMPORTED_MODULE_1__["default"],
  mutations: _mutations__WEBPACK_IMPORTED_MODULE_2__["default"]
});

/***/ }),

/***/ "./resources/js/store/modules/auth/mutations.js":
/*!******************************************************!*\
  !*** ./resources/js/store/modules/auth/mutations.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _store_mutation_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @store/mutation-types */ "./resources/js/store/mutation-types.js");
var _mutations$LOGGED$mut;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


/* harmony default export */ __webpack_exports__["default"] = (_mutations$LOGGED$mut = {}, _defineProperty(_mutations$LOGGED$mut, _store_mutation_types__WEBPACK_IMPORTED_MODULE_0__["LOGGED"], function (state, logged) {
  state.logged = logged;
}), _defineProperty(_mutations$LOGGED$mut, _store_mutation_types__WEBPACK_IMPORTED_MODULE_0__["ATTEMPT_USER"], function (state, user) {
  state.attemptUser = user;
}), _defineProperty(_mutations$LOGGED$mut, _store_mutation_types__WEBPACK_IMPORTED_MODULE_0__["OTP_VERIFIED"], function (state, verified) {
  state.otpverified = verified;
}), _defineProperty(_mutations$LOGGED$mut, _store_mutation_types__WEBPACK_IMPORTED_MODULE_0__["ACCESS_TOKEN"], function (state, accessToken) {
  state.accessToken = accessToken;
}), _defineProperty(_mutations$LOGGED$mut, _store_mutation_types__WEBPACK_IMPORTED_MODULE_0__["USER"], function (state, user) {
  state.user = user;
}), _mutations$LOGGED$mut);

/***/ }),

/***/ "./resources/js/store/modules/snackbar/getters.js":
/*!********************************************************!*\
  !*** ./resources/js/store/modules/snackbar/getters.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  snackbarShow: function snackbarShow(state) {
    return state.show;
  },
  snackbarColor: function snackbarColor(state) {
    return state.color;
  },
  snackbarText: function snackbarText(state) {
    return state.text;
  },
  snackbarSubtext: function snackbarSubtext(state) {
    return state.subText;
  },
  snackbarTimeout: function snackbarTimeout(state) {
    return state.timeout;
  }
});

/***/ }),

/***/ "./resources/js/store/modules/snackbar/index.js":
/*!******************************************************!*\
  !*** ./resources/js/store/modules/snackbar/index.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _getters__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getters */ "./resources/js/store/modules/snackbar/getters.js");
/* harmony import */ var _mutations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mutations */ "./resources/js/store/modules/snackbar/mutations.js");


var state = {
  show: false,
  color: "error",
  text: "An error occurred",
  subText: "",
  timeout: 6000
};
/* harmony default export */ __webpack_exports__["default"] = ({
  state: state,
  getters: _getters__WEBPACK_IMPORTED_MODULE_0__["default"],
  mutations: _mutations__WEBPACK_IMPORTED_MODULE_1__["default"]
});

/***/ }),

/***/ "./resources/js/store/modules/snackbar/mutations.js":
/*!**********************************************************!*\
  !*** ./resources/js/store/modules/snackbar/mutations.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mutation_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../mutation-types */ "./resources/js/store/mutation-types.js");
var _types$SET_SNACKBAR_S;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


/* harmony default export */ __webpack_exports__["default"] = (_types$SET_SNACKBAR_S = {}, _defineProperty(_types$SET_SNACKBAR_S, _mutation_types__WEBPACK_IMPORTED_MODULE_0__["SET_SNACKBAR_SHOW"], function (state, show) {
  state.show = show;
}), _defineProperty(_types$SET_SNACKBAR_S, _mutation_types__WEBPACK_IMPORTED_MODULE_0__["SET_SNACKBAR_COLOR"], function (state, color) {
  state.color = color;
}), _defineProperty(_types$SET_SNACKBAR_S, _mutation_types__WEBPACK_IMPORTED_MODULE_0__["SET_SNACKBAR_TEXT"], function (state, text) {
  state.text = text;
}), _defineProperty(_types$SET_SNACKBAR_S, _mutation_types__WEBPACK_IMPORTED_MODULE_0__["SET_SNACKBAR_SUBTEXT"], function (state, subText) {
  state.subText = subText;
}), _defineProperty(_types$SET_SNACKBAR_S, _mutation_types__WEBPACK_IMPORTED_MODULE_0__["SET_SNACKBAR_TIMEOUT"], function (state, timeout) {
  state.timeout = timeout;
}), _types$SET_SNACKBAR_S);

/***/ }),

/***/ "./resources/js/store/modules/users/actions.js":
/*!*****************************************************!*\
  !*** ./resources/js/store/modules/users/actions.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _store_mutation_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @store/mutation-types */ "./resources/js/store/mutation-types.js");
/* harmony import */ var _store_action_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @store/action-types */ "./resources/js/store/action-types.js");
/* harmony import */ var _api_users__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @api/users */ "./resources/js/api/users.js");
var _actions$SELECTED_USE;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




/* harmony default export */ __webpack_exports__["default"] = (_actions$SELECTED_USE = {}, _defineProperty(_actions$SELECTED_USE, _store_action_types__WEBPACK_IMPORTED_MODULE_1__["SELECTED_USER"], function (context, user) {
  context.commit(_store_mutation_types__WEBPACK_IMPORTED_MODULE_0__["SELECTED_USER"], user);
}), _defineProperty(_actions$SELECTED_USE, _store_action_types__WEBPACK_IMPORTED_MODULE_1__["FETCH_USERS"], function () {
  return new Promise(function (resolve, reject) {
    _api_users__WEBPACK_IMPORTED_MODULE_2__["default"].fetch().then(function (response) {
      // context.commit(mutations.SET_USERS, response.data);
      resolve(response);
    })["catch"](function (error) {
      reject(error);
    });
  });
}), _defineProperty(_actions$SELECTED_USE, _store_action_types__WEBPACK_IMPORTED_MODULE_1__["UPDATE_USER"], function (context, user) {
  return new Promise(function (resolve, reject) {
    _api_users__WEBPACK_IMPORTED_MODULE_2__["default"].update(user).then(function (response) {
      context.commit(_store_mutation_types__WEBPACK_IMPORTED_MODULE_0__["USER"], user);
      resolve(response);
    })["catch"](function (error) {
      reject(error);
    });
  });
}), _actions$SELECTED_USE);

/***/ }),

/***/ "./resources/js/store/modules/users/getters.js":
/*!*****************************************************!*\
  !*** ./resources/js/store/modules/users/getters.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  selectedUser: function selectedUser(state) {
    return state.selected_user;
  },
  users: function users(state) {
    return state.users;
  }
});

/***/ }),

/***/ "./resources/js/store/modules/users/index.js":
/*!***************************************************!*\
  !*** ./resources/js/store/modules/users/index.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _getters__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getters */ "./resources/js/store/modules/users/getters.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actions */ "./resources/js/store/modules/users/actions.js");
/* harmony import */ var _mutations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mutations */ "./resources/js/store/modules/users/mutations.js");



var state = {
  selected_user: {},
  users: []
};
/* harmony default export */ __webpack_exports__["default"] = ({
  state: state,
  getters: _getters__WEBPACK_IMPORTED_MODULE_0__["default"],
  actions: _actions__WEBPACK_IMPORTED_MODULE_1__["default"],
  mutations: _mutations__WEBPACK_IMPORTED_MODULE_2__["default"]
});

/***/ }),

/***/ "./resources/js/store/modules/users/mutations.js":
/*!*******************************************************!*\
  !*** ./resources/js/store/modules/users/mutations.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mutation_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../mutation-types */ "./resources/js/store/mutation-types.js");
var _types$SELECTED_USER$;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


/* harmony default export */ __webpack_exports__["default"] = (_types$SELECTED_USER$ = {}, _defineProperty(_types$SELECTED_USER$, _mutation_types__WEBPACK_IMPORTED_MODULE_0__["SELECTED_USER"], function (state, user) {
  state.selected_user = user;
}), _defineProperty(_types$SELECTED_USER$, _mutation_types__WEBPACK_IMPORTED_MODULE_0__["SET_USERS"], function (state, users) {
  state.users = users;
}), _types$SELECTED_USER$);

/***/ }),

/***/ "./resources/js/store/mutation-types.js":
/*!**********************************************!*\
  !*** ./resources/js/store/mutation-types.js ***!
  \**********************************************/
/*! exports provided: SET_DARK_THEME, LOGGED, ATTEMPT_USER, OTP_VERIFIED, ACCESS_TOKEN, USER, SET_SNACKBAR_SHOW, SET_SNACKBAR_COLOR, SET_SNACKBAR_TEXT, SET_SNACKBAR_SUBTEXT, SET_SNACKBAR_TIMEOUT, SELECTED_USER, SET_USERS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_DARK_THEME", function() { return SET_DARK_THEME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGGED", function() { return LOGGED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ATTEMPT_USER", function() { return ATTEMPT_USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OTP_VERIFIED", function() { return OTP_VERIFIED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ACCESS_TOKEN", function() { return ACCESS_TOKEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USER", function() { return USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_SNACKBAR_SHOW", function() { return SET_SNACKBAR_SHOW; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_SNACKBAR_COLOR", function() { return SET_SNACKBAR_COLOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_SNACKBAR_TEXT", function() { return SET_SNACKBAR_TEXT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_SNACKBAR_SUBTEXT", function() { return SET_SNACKBAR_SUBTEXT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_SNACKBAR_TIMEOUT", function() { return SET_SNACKBAR_TIMEOUT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SELECTED_USER", function() { return SELECTED_USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_USERS", function() { return SET_USERS; });
// APP MODULE
var SET_DARK_THEME = "SET_DARK_THEME"; // AUTH

var LOGGED = "LOGGED";
var ATTEMPT_USER = "ATTEMPT_USER";
var OTP_VERIFIED = "OTP_VERIFIED";
var ACCESS_TOKEN = "ACCESS_TOKEN";
var USER = "USER"; // SNACKBAR

var SET_SNACKBAR_SHOW = "SET_SNACKBAR_SHOW";
var SET_SNACKBAR_COLOR = "SET_SNACKBAR_COLOR";
var SET_SNACKBAR_TEXT = "SET_SNACKBAR_TEXT";
var SET_SNACKBAR_SUBTEXT = "SET_SNACKBAR_SUBTEXT";
var SET_SNACKBAR_TIMEOUT = "SET_SNACKBAR_TIMEOUT"; // USERS

var SELECTED_USER = "SELECTED_USER";
var SET_USERS = "SET_USERS";

/***/ }),

/***/ "./resources/sass/app.scss":
/*!*********************************!*\
  !*** ./resources/sass/app.scss ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader!../../node_modules/postcss-loader/src??ref--6-2!../../node_modules/sass-loader/dist/cjs.js??ref--6-3!./app.scss */ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./resources/sass/app.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ 0:
/*!***********************************!*\
  !*** multi ./resources/js/app.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/cristian/Desarrollos/kimblee/resources/js/app.js */"./resources/js/app.js");


/***/ })

},[[0,"/js/manifest","/js/vendor"]]]);