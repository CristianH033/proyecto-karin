(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["js/components/auth/VerifyEmailForm"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/auth/VerifyEmailForm.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/auth/VerifyEmailForm.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _store_action_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @store/action-types */ "./resources/js/store/action-types.js");
/* harmony import */ var _mixins_laraval__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mixins/laraval */ "./resources/js/mixins/laraval.js");
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
  mixins: [_mixins_laraval__WEBPACK_IMPORTED_MODULE_1__["default"]],
  data: function data() {
    return {
      signedURL: null
    };
  },
  mounted: function mounted() {
    var _this = this;

    this.signedURL = this.$route.query.signedurl;
    setTimeout(function () {
      _this.verify();
    }, 200); // this.$nextTick(() => {});
  },
  methods: {
    verify: function verify() {
      this.laravalResquest(_store_action_types__WEBPACK_IMPORTED_MODULE_0__["VERIFY_EMAIL"], this.signedURL).then(function (response) {
        console.log(response);
      })["catch"](function (error) {
        console.log(error);
        console.log(error.response);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/auth/VerifyEmailForm.vue?vue&type=template&id=75c63c4b&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/auth/VerifyEmailForm.vue?vue&type=template&id=75c63c4b& ***!
  \***********************************************************************************************************************************************************************************************************************/
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
    "v-card",
    { staticClass: "elevation-12" },
    [
      _c(
        "v-toolbar",
        { attrs: { color: "primary", dark: "", flat: "" } },
        [
          _c("v-toolbar-title", [
            _vm._v("Verificación de correo electronico:")
          ]),
          _vm._v(" "),
          _c("v-spacer"),
          _vm._v(" "),
          _c(
            "v-tooltip",
            {
              attrs: { bottom: "" },
              scopedSlots: _vm._u([
                {
                  key: "activator",
                  fn: function(ref) {
                    var on = ref.on
                    return [
                      _c(
                        "v-btn",
                        _vm._g({ attrs: { icon: "", large: "" } }, on),
                        [_c("v-icon", [_vm._v("mdi-paw")])],
                        1
                      )
                    ]
                  }
                }
              ])
            },
            [_vm._v(" "), _c("span", [_vm._v("Source")])]
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-card-text",
        [
          _c(
            "transition",
            { attrs: { name: "fade-transition", mode: "out-in" } },
            [
              _vm.laraLoading || _vm.successMessage == _vm.errorMessage
                ? _c(
                    "div",
                    { key: "loading", staticClass: "text-center" },
                    [
                      _c("v-progress-circular", {
                        attrs: { size: 60, color: "primary", indeterminate: "" }
                      })
                    ],
                    1
                  )
                : _vm._e(),
              _vm._v(" "),
              !_vm.laraLoading && _vm.successMessage != null
                ? _c(
                    "div",
                    { key: "success" },
                    [
                      _c("v-alert", { attrs: { type: "success" } }, [
                        _vm._v(
                          "\n          " +
                            _vm._s(_vm.successMessage) +
                            "\n        "
                        )
                      ])
                    ],
                    1
                  )
                : _vm._e(),
              _vm._v(" "),
              !_vm.laraLoading && _vm.errorMessage != null
                ? _c(
                    "div",
                    { key: "error" },
                    [
                      _c("v-alert", { attrs: { type: "error" } }, [
                        _vm._v(
                          "\n          " +
                            _vm._s(_vm.errorMessage) +
                            "\n        "
                        )
                      ])
                    ],
                    1
                  )
                : _vm._e()
            ]
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-card-actions",
        [
          _c(
            "v-btn",
            {
              attrs: {
                text: "",
                to: { name: "login" },
                color: "primary",
                disabled: _vm.laraLoading
              }
            },
            [_vm._v("\n      Iniciar sesión\n    ")]
          ),
          _vm._v(" "),
          _c("v-spacer"),
          _vm._v(" "),
          _c(
            "v-btn",
            {
              attrs: {
                text: "",
                to: { name: "resend-email" },
                color: "primary",
                disabled: _vm.laraLoading
              }
            },
            [_vm._v("\n      Volver a enviar correo\n    ")]
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

/***/ "./resources/js/components/auth/VerifyEmailForm.vue":
/*!**********************************************************!*\
  !*** ./resources/js/components/auth/VerifyEmailForm.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _VerifyEmailForm_vue_vue_type_template_id_75c63c4b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VerifyEmailForm.vue?vue&type=template&id=75c63c4b& */ "./resources/js/components/auth/VerifyEmailForm.vue?vue&type=template&id=75c63c4b&");
/* harmony import */ var _VerifyEmailForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./VerifyEmailForm.vue?vue&type=script&lang=js& */ "./resources/js/components/auth/VerifyEmailForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _VerifyEmailForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _VerifyEmailForm_vue_vue_type_template_id_75c63c4b___WEBPACK_IMPORTED_MODULE_0__["render"],
  _VerifyEmailForm_vue_vue_type_template_id_75c63c4b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/auth/VerifyEmailForm.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/auth/VerifyEmailForm.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/auth/VerifyEmailForm.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VerifyEmailForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./VerifyEmailForm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/auth/VerifyEmailForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VerifyEmailForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/auth/VerifyEmailForm.vue?vue&type=template&id=75c63c4b&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/auth/VerifyEmailForm.vue?vue&type=template&id=75c63c4b& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VerifyEmailForm_vue_vue_type_template_id_75c63c4b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./VerifyEmailForm.vue?vue&type=template&id=75c63c4b& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/auth/VerifyEmailForm.vue?vue&type=template&id=75c63c4b&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VerifyEmailForm_vue_vue_type_template_id_75c63c4b___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VerifyEmailForm_vue_vue_type_template_id_75c63c4b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);