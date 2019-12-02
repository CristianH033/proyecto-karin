<template>
  <login-window />
</template>

<script>
import LoadingComponent from "@js/components/LoadingComponent.vue";
import ErrorComponent from "@js/components/ErrorComponent.vue";

const LoginWindow = () => ({
  component: import(
    /* webpackChunkName: "js/components/auth/LoginWindow" */ "@js/components/auth/LoginWindow.vue"
  ),
  loading: LoadingComponent,
  error: ErrorComponent,
  delay: 0
});

export default {
  components: { LoginWindow },
  data: () => ({}),
  mounted() {},
  methods: {}
};
</script>

<style></style>
