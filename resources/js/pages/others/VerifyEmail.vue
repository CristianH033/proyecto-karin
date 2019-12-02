<template>
  <verify-email-form />
</template>

<script>
import LoadingComponent from "@js/components/LoadingComponent.vue";
import ErrorComponent from "@js/components/ErrorComponent.vue";

const VerifyEmailForm = () => ({
  component: import(
    /* webpackChunkName: "js/components/auth/VerifyEmailForm" */ "@js/components/auth/VerifyEmailForm.vue"
  ),
  loading: LoadingComponent,
  error: ErrorComponent,
  delay: 0
});

export default {
  components: {
    VerifyEmailForm
  },
  data: () => ({}),
  mounted() {},
  methods: {}
};
</script>

<style></style>
