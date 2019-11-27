<template>
  <v-card class="elevation-12">
    <v-form ref="resetForm" @submit.prevent="reset">
      <v-toolbar color="primary" dark flat>
        <v-toolbar-title>
          Reestablecer contraseña
        </v-toolbar-title>
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
        <span class="title">{{ user.email }}</span>
        <v-text-field
          id="password"
          v-model="user.password"
          label="Contraseña"
          name="password"
          prepend-icon="mdi-lock"
          type="password"
          :rules="laraRules.password"
          :disabled="laraLoading"
          required
        />
        <v-text-field
          id="confirm_password"
          v-model="user.password_confirmation"
          label="Confirmar contraseña"
          name="password_comfirmation"
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
          Reestablecer
        </v-btn>
      </v-card-actions>
    </v-form>
  </v-card>
</template>

<script>
import { RESET_PASSWORD, LOGIN } from "@store/action-types";
import laraval from "@mixins/laraval";
export default {
  mixins: [laraval],
  data: () => ({
    user: {
      email: null,
      password: null,
      password_confirmation: null,
      token: null
    }
  }),
  mounted() {
    this.user.token = this.$route.query.token;
    this.user.email = this.$route.query.email;
  },
  methods: {
    reset() {
      this.laravalResquest(RESET_PASSWORD, this.user, "resetForm")
        .then(() => {
          this.$store.dispatch(LOGIN, this.user).then(() => {
            this.$router.push({ name: "login" });
          });
        })
        .catch(error => {
          console.log(error.response);
        });
    }
  }
};
</script>

<style></style>
