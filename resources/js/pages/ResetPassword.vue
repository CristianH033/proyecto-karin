<template>
  <reset-password-form />
</template>

<script>
import LoadingComponent from "@js/components/LoadingComponent.vue";
import ErrorComponent from "@js/components/ErrorComponent.vue";

const ResetPasswordForm = () => ({
  component: import(
    /* webpackChunkName: "js/components/ResetPwdForm" */ "@js/components/ResetPwdForm.vue"
  ),
  loading: LoadingComponent,
  error: ErrorComponent,
  delay: 0
});

export default {
  components: {
    ResetPasswordForm
  },
  data() {
    return {};
  },
  mounted() {},
  methods: {}
};
</script>

<style>
</style>
