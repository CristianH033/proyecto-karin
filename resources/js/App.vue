<template>
  <transition name="fade-transition" mode="out-in">
    <router-view />
  </transition>
</template>

<script>
import { mapGetters } from "vuex";
import { LOGOUT, CHECK_AUTH, LOGIN } from "@js/store/action-types";
import { EventBus } from "@services/event-bus";
export default {
  name: "App",
  components: {},
  data: () => ({}),
  computed: {
    ...mapGetters({
      darkTheme: "getDarkTheme"
    })
  },
  created() {
    // Establecer tema oscuro según store
    this.$vuetify.theme.dark = this.darkTheme;
    // Cambiar color de fondo del documento segun tema
    document.documentElement.style.setProperty(
      "--kimblee-body-bg",
      this.darkTheme ? "black" : "white"
    );
    // Vigilar valos tema oscuro en store
    this.$store.watch(
      (state, getters) => getters.getDarkTheme,
      val => {
        this.$vuetify.theme.dark = val;
        document.documentElement.style.setProperty(
          "--kimblee-body-bg",
          val ? "black" : "white"
        );
      }
    );
  },
  mounted() {
    // Evento global (logedin)
    EventBus.$on("logged-in", () => {
      console.log("Evento logged-in en App.vue");
      this.loggedIn();
    });
    // Evento global (loggedout)
    EventBus.$on("logged-out", () => {
      console.log("Evento logged-out en App.vue");
      this.loggedOut();
    });
    // Check Auth
    this.$store
      .dispatch(CHECK_AUTH)
      .then(() => {})
      .catch(error => {
        switch (error.response.status) {
          case 401:
            this.loggedOut();
            break;
          default:
            break;
        }
      });
  },
  beforeDestroy() {
    EventBus.$off("logged-in");
    EventBus.$off("logged-out");
  },
  methods: {
    loggedIn() {
      console.log("X");
      let route = this.$route.query.redirect
        ? this.$route.query.redirect
        : { name: "home" };
      console.log(route);
      this.$router.push({ name: "home" });
    },
    loggedOut() {
      console.log("Y");
      this.$router.push({ name: "login" }).catch(() => {});
    }
  }
};
</script>

<style></style>

<style lang="scss" scoped></style>
