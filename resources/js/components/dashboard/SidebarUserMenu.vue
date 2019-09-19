<template>
  <v-navigation-drawer v-model="drawer" width="300" app temporary right>
    <v-list-item>
      <v-list-item-avatar>
        <v-avatar color="red">
          <span class="white--text headline">{{ user.name[0] }}</span>
        </v-avatar>
      </v-list-item-avatar>
      <v-list-item-content>
        <v-list-item-title>{{ user.name }}</v-list-item-title>
        <v-list-item-subtitle>{{ user.email }}</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
    <v-divider></v-divider>
    <v-list dense>
      <v-list-item link>
        <v-list-item-icon>
          <v-icon>mdi-settings</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>Configuraciones</v-list-item-title>
        </v-list-item-content>
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
export default {
  name: "SidebarUserMenu",
  props: {
    user: {
      type: Object,
      default: function() {
        return {
          id: null,
          name: "",
          email: ""
        };
      }
    }
  },
  data: function() {
    return {
      drawer: null
    };
  },
  mounted() {
    EventBus.$on("togleSidebarUserMenu", () => (this.drawer = !this.drawer));
  },
  methods: {
    salir() {
      EventBus.$emit("logged-out");
    }
  }
};
</script>

<style>
</style>
