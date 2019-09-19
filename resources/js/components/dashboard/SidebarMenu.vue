<template>
  <v-navigation-drawer v-model="drawer" width="300" app clipped>
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
        <v-subheader>Administración</v-subheader>
        <v-list-group no-action>
          <template v-slot:activator>
            <v-list-item-action>
              <v-icon>mdi-security</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Roles y Permisos</v-list-item-title>
            </v-list-item-content>
          </template>
          <v-list-item link>
            <v-list-item-action>
              <v-icon>mdi-shield-account</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Usuarios</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item link>
            <v-list-item-action>
              <v-icon>mdi-account-key</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Roles</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-group>
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
      <v-footer>
        <div>Cristian Home</div>
        <div class="flex-grow-1" />
        <div>&copy; 2019</div>
      </v-footer>
    </template>
  </v-navigation-drawer>
</template>

<script>
import { EventBus } from "../../services/event-bus";
export default {
  name: "SidebarMenu",
  data: function() {
    return {
      drawer: null
    };
  },
  mounted() {
    EventBus.$on("togleSidebarMenu", () => (this.drawer = !this.drawer));
  }
};
</script>

<style>
</style>
