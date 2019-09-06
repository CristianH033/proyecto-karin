<template>
  <transition name="fade-transition" mode="out-in">
    <router-view />
  </transition>
</template>

<script>
import * as actions from "@js/store/action-types";
export default {
  name: "App",
  components: {},
  data: function() {
    return {};
  },
  computed: {},
  created() {},
  mounted() {
    // Evento global (login)
    this.$globalEvent.$on("logged-in", () => {
      let route = this.$route.query.redirect
        ? this.$route.query.redirect
        : { name: "home" };
      this.$router.push(route);
    });
    // Evento global (logout)
    this.$globalEvent.$on("logged-out", () => {
      this.$store.dispatch(actions.FAKE_LOGOUT).then(() => {
        this.$router.push({ name: "login" });
      });
    });
  },
  beforeDestroy() {
    this.$globalEvent.$off("logged-in");
    this.$globalEvent.$off("logged-out");
  },
  methods: {}
};
</script>

<style></style>

<style lang="scss" scoped></style>
