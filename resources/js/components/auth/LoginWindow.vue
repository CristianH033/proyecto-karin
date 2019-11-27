<template>
  <v-card class="elevation-12">
    <v-toolbar color="primary" dark flat>
      <v-toolbar-title>{{ titulo }}</v-toolbar-title>
      <v-spacer />
      <v-tooltip bottom>
        <template v-slot:activator="{ on }">
          <v-btn icon large v-on="on">
            <v-icon>mdi-paw</v-icon>
          </v-btn>
        </template>
        <span>Source</span>
      </v-tooltip>
    </v-toolbar>
    <v-window :value="step" :touchless="true">
      <login-form
        :step="step"
        :value="1"
        :parent-loading="laraLoading"
        @change-title="change"
      />
      <second-login-window
        :step="step"
        :value="2"
        :parent-loading="laraLoading"
        @change-title="change"
      />
    </v-window>
  </v-card>
</template>

<script>
import LoginForm from "@components/auth/LoginForm";
import SecondLoginWindow from "@components/auth/SecondLoginWindow";
import { LOGOUT } from "@store/action-types";
import laraval from "@mixins/laraval";
export default {
  name: "LoginWindow",
  components: {
    LoginForm,
    SecondLoginWindow
  },
  mixins: [laraval],
  data: () => ({ titulo: "" }),
  computed: {
    step() {
      return this.$store.getters.logged ? 2 : 1;
    }
  },
  mounted() {},
  methods: {
    change(titulo) {
      this.titulo = titulo;
    },
    logout: function() {
      this.laravalResquest(LOGOUT);
    }
  }
};
</script>

<style></style>
