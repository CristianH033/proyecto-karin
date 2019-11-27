<template>
  <transition name="fade-transition" mode="out-in">
    <router-view />
  </transition>
</template>

<script>
import { mapGetters } from "vuex";
import { LOGOUT, CHECK_AUTH } from "@js/store/action-types";
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
      this.$store.dispatch(LOGOUT).then(() => {
        this.$router.push({ name: "login" });
      });
    });
    // Check Auth
    this.$store
      .dispatch(CHECK_AUTH)
      .then(() => {})
      .catch(() => {});
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
