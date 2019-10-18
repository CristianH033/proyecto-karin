<template>
  <v-app id="kemble-app" app>
    <app-bar />
    <sidebar-menu />
    <sidebar-user-menu v-bind="user" />
    <v-content>
      <v-container fluid>
        <transition name="fade-transition" mode="out-in">
          <router-view></router-view>
        </transition>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
let unregisterBeforeEach, unregisterBeforeResolve;
import AppBar from "@components/dashboard/AppBar";
import SidebarMenu from "@components/dashboard/SidebarMenu";
import SidebarUserMenu from "@components/dashboard/SidebarUserMenu";
import { mapGetters } from "vuex";
export default {
  name: "Dashboard",
  components: { SidebarMenu, SidebarUserMenu, AppBar },
  data: function() {
    return {};
  },
  computed: {
    ...mapGetters({
      user: "user"
    })
  },
  created() {},
  mounted() {
    // Eventos de rutas
    unregisterBeforeEach = this.$router.beforeEach((to, from, next) => {
      // Ruta solicitada
      next();
    });
    unregisterBeforeResolve = this.$router.beforeResolve((to, from, next) => {
      // Ruta resuelta
      next();
    });
  },
  beforeDestroy() {
    // Desvincular el evento de rutas
    unregisterBeforeEach();
    unregisterBeforeResolve();
  },
  methods: {}
};
</script>

<style></style>

<style lang="scss" scoped>
.layout-container {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0px;
  left: 0px;
}

.dashboard-leave-active {
  // transition: opacity 0.7s;
  transition-delay: 0s;
}
.dashboard-enter-active {
  // transition: opacity 0.7s;
  transition-delay: 0s;
}
// .dashboard-enter,
.dashboard-leave-to {
  // opacity: 0;
  transition-delay: 0.7s;
}
</style>
