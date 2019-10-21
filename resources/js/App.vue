<template>
  <transition name="fade-transition" mode="out-in">
    <router-view />
  </transition>
</template>

<script>
import { mapGetters } from "vuex";
import * as actions from "@js/store/action-types";
import { EventBus } from "@services/event-bus";
export default {
  name: "App",
  components: {},
  data: function() {
    return {};
  },
  computed: {
    ...mapGetters({
      darkTheme: "getDarkTheme"
    })
  },
  created() {
    // Establecer tema oscuro según store
    this.$vuetify.theme.dark = this.darkTheme;
    // Vigilar valos tema oscuro en store
    this.$store.watch(
      (state, getters) => getters.getDarkTheme,
      val => {
        this.$vuetify.theme.dark = val;
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
