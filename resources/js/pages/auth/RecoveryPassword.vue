<template>
  <recovery-password-form />
</template>

<script>
import LoadingComponent from "@components/LoadingComponent.vue";
import ErrorComponent from "@components/ErrorComponent.vue";

const RecoveryPasswordForm = () => ({
  component: import(
    /* webpackChunkName: "js/components/auth/RecoveryPwdForm" */ "@components/auth/RecoveryPwdForm.vue"
  ),
  loading: LoadingComponent,
  error: ErrorComponent,
  delay: 0
});

export default {
  components: {
    RecoveryPasswordForm
  },
  data: () => ({}),
  mounted() {},
  methods: {}
};
</script>

<style></style>
