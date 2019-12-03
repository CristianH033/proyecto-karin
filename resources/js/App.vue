<template>
  <transition name="fade-transition" mode="out-in">
    <router-view />
  </transition>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { EventBus } from "@services/event-bus";
import { SET_DARK_THEME } from "@store/action-types";
export default {
  name: "App",
  components: {},
  data: () => ({
    mq: window.matchMedia("(prefers-color-scheme: dark)")
  }),
  computed: {
    ...mapGetters({
      darkTheme: "getDarkTheme",
      useBrowserTheme: "getUseBrowserTheme"
    })
  },
  watch: {
    useBrowserTheme: function(val) {
      if (val) {
        this.setBrowserTheme();
      }
    }
  },
  created() {
    if (this.useBrowserTheme) {
      // Si está en modo oscuro activar el modo oscuro en la app
      this.setBrowserTheme();
      this.setVuetifyDarkTheme(this.browserIsDark());
    } else {
      this.setVuetifyDarkTheme(this.darkTheme);
    }

    // Reaccionar a cambios
    this.listenBrowserTheme();
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
    // Evento global (darkthemechanged)
    EventBus.$on("dark-theme-changed", () => {
      console.log("Evento dark-theme-changed en App.vue");
      this.setVuetifyDarkTheme(this.darkTheme);
      // this.$vuetify.theme.dark = this.darkTheme;
    });
  },
  beforeDestroy() {
    EventBus.$off("logged-in");
    EventBus.$off("logged-out");
  },
  methods: {
    ...mapActions({
      setDarkTheme: SET_DARK_THEME
    }),
    loggedIn() {
      let route = this.$route.query.redirect
        ? this.$route.query.redirect
        : { name: "home" };
      this.$router.push(route);
    },
    loggedOut() {
      this.$router.push({ name: "login" }).catch(() => {});
    },
    setVuetifyDarkTheme(val) {
      this.$vuetify.theme.dark = val;
    },
    browserIsDark() {
      // Cosultar si el navegador está en modo oscuro
      return this.mq.matches;
    },
    setBrowserTheme() {
      this.setDarkTheme(this.browserIsDark());
    },
    listenBrowserTheme() {
      // Reaccionar a los cambios de tema (light, dark) del navegador
      this.mq.addEventListener("change", this.handlerBrowserTheme, false);
    },
    handlerBrowserTheme(e) {
      if (this.useBrowserTheme) {
        this.setDarkTheme(e.matches);
      }
    },
    removeListenerBrowserTheme() {
      this.mq.removeEventListener("change", this.handlerBrowserTheme, false);
    }
  }
};
</script>

<style></style>

<style lang="scss" scoped></style>
