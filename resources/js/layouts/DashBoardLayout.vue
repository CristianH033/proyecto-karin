<template>
  <v-app id="kemble-app" app>
    <v-app-bar app clipped-left fixed elevate-on-scroll>
      <v-toolbar-title style="width: 300px">
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        <v-icon>mdi-paw</v-icon>
        <span class="hidden-sm-and-down">Keemble</span>
      </v-toolbar-title>
      <v-text-field
        flat
        solo-inverted
        hide-details
        prepend-inner-icon="mdi-magnify"
        label="Search"
        class="hidden-sm-and-down"
      ></v-text-field>
      <div class="flex-grow-1" />
      <v-btn icon>
        <v-icon>mdi-apps</v-icon>
      </v-btn>
      <v-btn icon>
        <v-badge overlap class="align-self-center">
          <template v-slot:badge>
            <span>5</span>
          </template>
          <v-icon>mdi-bell</v-icon>
        </v-badge>
      </v-btn>
      <v-btn icon large @click.stop="userDrawer = !userDrawer">
        <v-avatar size="32px" item>
          <v-icon>mdi-account-circle</v-icon>
        </v-avatar>
      </v-btn>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" app clipped>
      <v-list dense rounded>
        <v-list-item-group color="primary">
          <v-list-item :to="{ name: 'home' }">
            <v-list-item-action>
              <v-icon>mdi-home</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Inicio</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-divider dark class="my-4"></v-divider>
          <v-list-item :to="{ name: 'devices' }">
            <v-list-item-action>
              <v-icon>mdi-devices</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Dispositivos</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item :to="{ name: 'headquarters' }">
            <v-list-item-action>
              <v-icon>mdi-home-city</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Sedes</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-divider dark class="my-4"></v-divider>
          <v-list-item :to="{ name: 'about' }">
            <v-list-item-action>
              <v-icon>mdi-information-outline</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Acerca de nosotros</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
      <template v-slot:append>
        <div class="pa-2">
          <v-btn block @click="salir">Salir</v-btn>
        </div>
      </template>
    </v-navigation-drawer>
    <v-navigation-drawer v-model="userDrawer" absolute temporary right>
      <v-list-item>
        <v-list-item-avatar>
          <v-img></v-img>
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title>Cristian Home</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>
      <v-list dense>
        <v-list-item v-for="item in items" :key="item.title" link>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <template v-slot:append>
        <div class="pa-2">
          <v-btn block @click="salir">Salir</v-btn>
        </div>
      </template>
    </v-navigation-drawer>
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
import { EventBus } from "@services/event-bus";
export default {
  name: "Dashboard",
  components: {},
  data: function() {
    return {
      drawer: null,
      userDrawer: null,
      items: [
        { title: "Home", icon: "mdi-view-dashboard" },
        { title: "About", icon: "mdi-forum" }
      ]
    };
  },
  computed: {
    auth() {
      return this.$store.getters.getAuth;
    },
    dato() {
      return this.$store.getters.getDato;
    }
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
  methods: {
    salir() {
      EventBus.$emit("logged-out");
    }
  }
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
