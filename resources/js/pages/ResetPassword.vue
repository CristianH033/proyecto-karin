<template>
  <reset-password-form />
</template>

<script>
import LoadingComponent from "@js/components/LoadingComponent.vue";
import ErrorComponent from "@js/components/ErrorComponent.vue";

const ResetPasswordForm = () => ({
  component: import(
    /* webpackChunkName: "js/components/auth/ResetPwdForm" */ "@js/components/auth/ResetPwdForm.vue"
  ),
  loading: LoadingComponent,
  error: ErrorComponent,
  delay: 0
});

export default {
  components: {
    ResetPasswordForm
  },
  data: () => ({}),
  mounted() {},
  methods: {}
};
</script>

<style></style>
