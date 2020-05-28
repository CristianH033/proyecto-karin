/**
 * javascript comment
 * @Author: Cristian David Home
 * @Date: 2019-11-22 01:17:34
 * @Desc: Mixin laravel-validate "laraval" validar formularios en vuetify
 * con reglas creadas a partir de un response laravel
 */
const laraval = {
  data: () => ({
    laraRules: {},
    laraLoading: false,
    errorMessage: null,
    toastMessage: null,
    statusText: null,
    successMessage: null
  }),
  mounted() {},
  methods: {
    /**
     * Mostrar toast
     */
    laraToast() {
      // Mostrar toast success
      if (this.successMessage) {
        this.$toast.success(this.toastMessage, {
          icon: "mdi-check-circle-outline"
        });
      }
      // Mostrar toast error
      if (this.errorMessage) {
        this.$toast.error(this.toastMessage, {
          icon: "mdi-alert-circle-outline"
        });
      }
    },
    /**
     * Validar formulario contra el response
     *
     * @param Object response
     * @param String formRef
     * @param Boolean showToast
     */
    laravalValidate: function(
      response,
      formRef,
      showToast = true,
      fields = []
    ) {
      // Status text
      this.statusText = response.statusText;
      // Success response
      if (response.status >= 200 && response.status < 300) {
        this.successMessage = response.data.message;
        this.toastMessage = response.data.message;
      }
      // All errors response
      if (response.status >= 400) {
        this.errorMessage = response.data.message;
        switch (response.status) {
          case 401:
          case 403:
          case 422:
          case 429:
            this.toastMessage = response.data.message;
            break;
          default:
            showToast = true;
            this.toastMessage = `<b>Error ${response.status}:</b> <br/> ${response.statusText} - ${response.data.message}`;
            break;
        }
      }
      // Validar errores y crear reglas segun errores
      if (response.data.errors) {
        Object.entries(response.data.errors).forEach(([key, value]) => {
          if (!fields.includes(key) && fields.length > 0) {
            showToast = true;
            this.toastMessage = value[0];
          }
          this.laraRules[key] = [() => value[0]];
        });
      }
      // Validate vuetify form
      if (formRef) {
        this.$refs[formRef].validate();
      }
      // Mostrar toast si se requiere
      if (showToast) this.laraToast();
    },
    /**
     * Clear vuetify forms errors
     *
     * @param String formRef
     */
    laravalClear: function(formRef) {
      this.laraRules = {};
      this.successMessage = null;
      this.errorMessage = null;
      this.statusText = null;
      this.toastMessage = null;
      if (formRef) {
        this.$refs[formRef].validate();
      }
    },
    /**
     * Make action request
     *
     * @param String action
     * @param any params
     * @param String formRef
     * @param Boolean showToast
     */
    laravalResquest: function(
      action,
      params,
      formRef,
      showToast = true,
      fields = []
    ) {
      return new Promise((resolve, reject) => {
        this.laravalClear();
        this.laraLoading = true;
        this.$store
          .dispatch(action, params)
          .then(response => {
            this.laravalValidate(response, formRef, showToast, fields);
            resolve(response);
          })
          .catch(error => {
            this.laravalValidate(error.response, formRef, showToast, fields);
            reject(error);
          })
          .finally(() => {
            this.laraLoading = false;
          });
      });
    }
  }
};
export default laraval;
