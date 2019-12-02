<template>
  <v-navigation-drawer v-model="drawer" width="300" app clipped>
    <v-list dense rounded>
      <v-list-item-group color="primary">
        <div v-for="(item, index) in menuItems" :key="index">
          <v-list-item v-if="item.type == 'item'" :to="item.to">
            <v-list-item-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>{{ item.text }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-divider
            dark
            class="my-4"
            v-if="item.type == 'divider'"
          ></v-divider>
          <v-subheader v-if="item.type == 'subheader'">
            {{ item.text }}
          </v-subheader>
          <v-list-group v-if="item.type == 'group'" no-action>
            <template v-slot:activator>
              <v-list-item-action>
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>{{ item.text }}</v-list-item-title>
              </v-list-item-content>
            </template>
            <v-list-item
              v-for="(subitem, i) in item.children"
              :key="i"
              :to="subitem.to"
            >
              <v-list-item-action>
                <v-icon>{{ subitem.icon }}</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>{{ subitem.text }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-group>
        </div>
      </v-list-item-group>
    </v-list>
    <template v-slot:append>
      <v-footer>
        <v-toolbar-title style="width: 300px">
          <v-icon>mdi-paw</v-icon>
          <span class="hidden-sm-and-down">Keemble</span>
        </v-toolbar-title>
      </v-footer>
    </template>
  </v-navigation-drawer>
</template>

<script>
import { EventBus } from "../../services/event-bus";
export default {
  name: "SidebarMenu",
  data: () => ({
    drawer: null,
    menuItems: [
      {
        type: "item",
        text: "Inicio",
        icon: "mdi-home",
        to: { name: "home" }
      },
      { type: "divider" },
      {
        type: "subheader",
        text: "Administración"
      },
      {
        type: "group",
        text: "Administración",
        icon: "mdi-security",
        children: [
          {
            type: "item",
            text: "Usuarios",
            icon: "mdi-shield-account",
            to: { name: "admin-users" }
          },
          {
            type: "item",
            text: "Roles y permisos",
            icon: "mdi-account-key",
            to: { name: "admin-roles" }
          }
        ]
      },
      { type: "divider" },
      {
        type: "subheader",
        text: "Clientes"
      },
      {
        type: "group",
        text: "Clientes",
        icon: "mdi-domain",
        children: [
          {
            type: "item",
            text: "Dispositivos",
            icon: "mdi-devices",
            to: { name: "devices" }
          },
          {
            type: "item",
            text: "Sedes",
            icon: "mdi-home-city",
            to: { name: "headquarters" }
          },
          {
            type: "item",
            text: "Personal",
            icon: "mdi-account-group",
            to: { name: "staff" }
          },
          {
            type: "item",
            text: "Porveedores",
            icon: "mdi-store",
            to: { name: "suppliers" }
          },
          {
            type: "item",
            text: "Estaciones de trabajo",
            icon: "mdi-desktop-classic",
            to: { name: "work-stations" }
          }
        ]
      },
      { type: "divider" },
      {
        type: "subheader",
        text: "Soporte y servicio"
      },
      {
        type: "group",
        text: "Soporte y servicio",
        icon: "mdi-face-agent",
        children: [
          {
            type: "item",
            text: "Roles y permisos",
            icon: "mdi-account-key",
            to: { name: "admin-roles" }
          }
        ]
      },
      { type: "divider" },
      {
        type: "item",
        text: "Acerca de nosotros",
        icon: "mdi-information-outline",
        to: { name: "about" }
      }
    ]
  }),
  mounted() {
    EventBus.$on("togleSidebarMenu", () => (this.drawer = !this.drawer));
  }
};
</script>

<style></style>
