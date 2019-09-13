<template>
  <transition name="fade-transition" mode="out-in">
    <router-view />
  </transition>
</template>

<script>
import * as actions from "@js/store/action-types";
import { EventBus } from "@services/event-bus";
import axios from "axios";
export default {
  name: "App",
  components: {},
  data: function() {
    return {};
  },
  computed: {},
  created() {},
  mounted() {
    // Interceptor de AXIOS
    axios.interceptors.request.use(
      config => {
        let token = this.$store.getters.token;
        if (token) {
          config.headers["Authorization"] = `Bearer ${token}`;
        }
        return config;
      },
      error => {
        return Promise.reject(error);
      }
    );
    // Evento global (login)
    EventBus.$on("logged-in", () => {
      console.log("Evento logged en App.vue");
      let route = this.$route.query.redirect
        ? this.$route.query.redirect
        : { name: "home" };
      console.log(route);
      this.$router.push({ name: "home" });
    });
    // Evento global (logout)
    EventBus.$on("logged-out", () => {
      this.$store.dispatch(actions.LOGOUT).then(() => {
        this.$router.push({ name: "login" });
      });
    });
  },
  beforeDestroy() {
    EventBus.$off("logged-in");
    EventBus.$off("logged-out");
  },
  methods: {}
};
</script>

<style></style>

<style lang="scss" scoped></style>
