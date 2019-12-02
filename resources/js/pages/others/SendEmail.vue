<template>
  <send-email-form />
</template>

<script>
import LoadingComponent from "@js/components/LoadingComponent.vue";
import ErrorComponent from "@js/components/ErrorComponent.vue";

const SendEmailForm = () => ({
  component: import(
    /* webpackChunkName: "js/components/auth/SendEmailForm" */ "@js/components/auth/SendEmailForm.vue"
  ),
  loading: LoadingComponent,
  error: ErrorComponent,
  delay: 0
});

export default {
  components: {
    SendEmailForm
  },
  data: () => ({}),
  mounted() {},
  methods: {}
};
</script>

<style></style>
