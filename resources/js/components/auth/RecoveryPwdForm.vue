<template>
  <v-card class="elevation-12">
    <v-form ref="recoveryForm" v-model="valid" @submit.prevent="enviar">
      <v-toolbar color="primary" dark flat>
        <v-toolbar-title>Recuperar contraseña</v-toolbar-title>
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
        <v-text-field
          v-model="email"
          :disabled="laraLoading"
          label="Correo electrónico"
          name="email"
          prepend-icon="mdi-email-outline"
          type="email"
          :rules="laraRules.email"
          required
          autofocus
        />
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
        <v-btn type="submit" color="primary" :loading="laraLoading">
          Enviar correo
        </v-btn>
      </v-card-actions>
    </v-form>
  </v-card>
</template>

<script>
import { REQUEST_PWD_RESET } from "@store/action-types";
import laraval from "@mixins/laraval";
export default {
  mixins: [laraval],
  data: () => ({
    email: null,
    valid: false
  }),
  mounted() {},
  methods: {
    enviar() {
      this.laravalResquest(REQUEST_PWD_RESET, this.email, "recoveryForm")
        .then(() => {})
        .catch(() => {});
    }
  }
};
</script>

<style></style>
