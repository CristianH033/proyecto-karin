<template>
  <v-card class="elevation-12">
    <v-form ref="registerForm" v-model="valid" @submit.prevent="register">
      <v-toolbar color="primary" dark flat>
        <v-toolbar-title>Registrarse</v-toolbar-title>
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
          v-model="user.dni"
          label="Documento de identidad"
          name="dni"
          prepend-icon="mdi-account-card-details"
          type="text"
          :rules="laraRules.dni"
          :disabled="laraLoading"
          required
        />
        <v-text-field
          v-model="user.email"
          label="Correo electrónico"
          name="email"
          prepend-icon="mdi-email"
          type="text"
          :rules="laraRules.email"
          :disabled="laraLoading"
          required
        />
        <password-input
          v-model="user.password"
          label="Contraseña"
          name="password"
          prepend-icon="mdi-lock"
          type="password"
          :rules="laraRules.password"
          :disabled="laraLoading"
          required
        />
        <password-input
          v-model="user.password_confirmation"
          label="Confirmar contraseña"
          name="password_confirmation"
          prepend-icon="mdi-lock"
          type="password"
          :rules="laraRules.password_confirmation"
          :disabled="laraLoading"
          required
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
          Registrarse
        </v-btn>
      </v-card-actions>
    </v-form>
  </v-card>
</template>

<script>
import { REGISTER } from "@store/action-types";
import laraval from "@mixins/laraval";
import PasswordInput from "@components/inputs/PasswordInput";
export default {
  components: {
    PasswordInput
  },
  mixins: [laraval],
  data: () => ({
    user: {
      dni: null,
      email: null,
      password: null,
      password_confirmation: null
    },
    valid: false
  }),
  mounted() {},
  methods: {
    register() {
      this.laravalResquest(REGISTER, this.user, "registerForm")
        .then(() => {
          setTimeout(() => {
            this.$router.push({ name: "login" });
          }, 500);
        })
        .catch(() => {});
    }
  }
};
</script>

<style></style>
