<template>
  <v-app-bar app clipped-left fixed elevate-on-scroll>
    <v-app-bar-nav-icon @click.stop="togleSidebarMenu"></v-app-bar-nav-icon>
    <v-toolbar-title class="hidden-sm-and-down">
      <v-icon>mdi-paw</v-icon>
      <span>Keemble</span>
    </v-toolbar-title>
    <div class="flex-grow-1" />
    <v-toolbar-title>
      <transition name="fade-transition" mode="out-in">
        <span :key="appTitle" class="title">{{ appTitle }}</span>
      </transition>
    </v-toolbar-title>
    <div class="flex-grow-1" />
    <v-btn icon>
      <v-badge overlap class="align-self-center">
        <template v-slot:badge>
          <span>5</span>
        </template>
        <v-icon>mdi-bell</v-icon>
      </v-badge>
    </v-btn>
    <v-btn icon large @click.stop="togleSidebarUserMenu">
      <v-avatar size="32px" item>
        <v-icon>mdi-account-circle</v-icon>
      </v-avatar>
    </v-btn>
    <v-progress-linear
      :active="loading"
      :indeterminate="true"
      absolute
      top
    ></v-progress-linear>
  </v-app-bar>
</template>

<script>
import { EventBus } from "@services/event-bus";
import { mapGetters } from "vuex";
export default {
  name: "AppBar",
  props: {
    loading: Boolean
  },
  data: () => ({}),
  computed: {
    ...mapGetters({ appName: "getAppName", appTitle: "getTitle" })
  },
  methods: {
    togleSidebarMenu() {
      EventBus.$emit("togleSidebarMenu");
    },
    togleSidebarUserMenu() {
      EventBus.$emit("togleSidebarUserMenu");
    }
  }
};
</script>

<style></style>
