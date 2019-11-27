<template>
  <v-card class="elevation-12">
    <v-toolbar color="primary" dark flat>
      <v-toolbar-title>Verificación de correo electronico:</v-toolbar-title>
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
    <v-card-text>
      <transition name="fade-transition" mode="out-in">
        <div
          v-if="laraLoading || successMessage == errorMessage"
          key="loading"
          class="text-center"
        >
          <v-progress-circular :size="60" color="primary" indeterminate />
        </div>
        <div v-if="!laraLoading && successMessage != null" key="success">
          <v-alert type="success">
            {{ successMessage }}
          </v-alert>
        </div>
        <div v-if="!laraLoading && errorMessage != null" key="error">
          <v-alert type="error">
            {{ errorMessage }}
          </v-alert>
        </div>
      </transition>
    </v-card-text>
    <v-card-actions>
      <v-btn
        text
        :to="{ name: 'login' }"
        color="primary"
        :disabled="laraLoading"
      >
        Iniciar sesión
      </v-btn>
      <v-spacer />
      <v-btn
        text
        :to="{ name: 'resend-email' }"
        color="primary"
        :disabled="laraLoading"
      >
        Volver a enviar correo
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import { VERIFY_EMAIL } from "@store/action-types";
import laraval from "@mixins/laraval";
export default {
  mixins: [laraval],
  data: () => ({
    signedURL: null
  }),
  mounted() {
    this.signedURL = this.$route.query.signedurl;
    setTimeout(() => {
      this.verify();
    }, 200);
    // this.$nextTick(() => {});
  },
  methods: {
    verify() {
      this.laravalResquest(VERIFY_EMAIL, this.signedURL)
        .then(response => {
          console.log(response);
        })
        .catch(error => {
          console.log(error);
          console.log(error.response);
        });
    }
  }
};
</script>

<style></style>
