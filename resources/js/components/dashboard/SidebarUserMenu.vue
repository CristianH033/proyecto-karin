<template>
  <v-navigation-drawer v-model="drawer" width="300" app temporary right>
    <v-list>
      <v-list-item>
        <v-list-item-avatar>
          <v-avatar color="red">
            <span class="white--text headline text-capitalize">
              {{ nombre[0] }}
            </span>
          </v-avatar>
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title class="text-capitalize">
            {{ nombre }}
          </v-list-item-title>
          <v-list-item-subtitle>{{ email }}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>
    </v-list>
    <v-list dense>
      <v-list-item link>
        <v-list-item-icon>
          <v-icon>mdi-settings</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>Configuración de la cuenta</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item>
        <v-list-item-icon>
          <v-icon>mdi-theme-light-dark</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>
            Usar tema del navegador
          </v-list-item-title>
        </v-list-item-content>
        <v-list-item-action>
          <v-switch v-model="browserTheme"></v-switch>
        </v-list-item-action>
      </v-list-item>
      <v-list-item :disabled="browserTheme">
        <v-list-item-icon>
          <v-icon :disabled="browserTheme">mdi-brightness-6</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>
            Tema oscuro
          </v-list-item-title>
        </v-list-item-content>
        <v-list-item-action>
          <v-switch v-model="darkTheme" :disabled="browserTheme"></v-switch>
        </v-list-item-action>
      </v-list-item>
    </v-list>
    <template v-slot:append>
      <div class="pa-2">
        <v-btn block text color="error" @click="salir">
          <v-icon>mdi-power</v-icon>
          <div class="flex-grow-1" />
          Salir
        </v-btn>
      </div>
    </template>
  </v-navigation-drawer>
</template>

<script>
import { EventBus } from "@services/event-bus";
import {
  LOGOUT,
  SET_DARK_THEME,
  SET_USE_BROWSER_THEME
} from "@store/action-types";
export default {
  name: "SidebarUserMenu",
  props: {
    nombre: {
      type: String,
      default: "Cargando..."
    },
    email: {
      type: String,
      default: "Cargando..."
    }
  },
  data: () => ({
    drawer: null
  }),
  computed: {
    browserTheme: {
      get() {
        return this.$store.getters.getUseBrowserTheme;
      },
      set(value) {
        this.$store.dispatch(SET_USE_BROWSER_THEME, value);
      }
    },
    darkTheme: {
      get() {
        return this.$store.getters.getDarkTheme;
      },
      set(value) {
        this.$store.dispatch(SET_DARK_THEME, value);
      }
    }
  },
  mounted() {
    EventBus.$on("togleSidebarUserMenu", () => (this.drawer = !this.drawer));
  },
  methods: {
    salir() {
      this.$store.dispatch(LOGOUT);
    }
  }
};
</script>

<style></style>
