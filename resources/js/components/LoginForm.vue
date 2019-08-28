<template>
  <v-card class="elevation-12">
    <v-form v-model="valid" :novalidate="false" @submit.prevent="login">
      <v-toolbar color="primary" dark flat>
        <v-toolbar-title>Iniciar sesión</v-toolbar-title>
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
          :disabled="loading"
          label="Usuario"
          name="login"
          prepend-icon="mdi-account"
          type="email"
          :rules="['Required']"
          autofocus
          required
        />
        <v-text-field
          id="password"
          v-model="password"
          :disabled="loading"
          label="Contraseña"
          name="password"
          prepend-icon="mdi-lock"
          type="password"
          required
        />
      </v-card-text>
      <v-card-actions>
        <v-btn text :to="{ name: 'register' }" color="primary">Registrarse</v-btn>
        <v-spacer />
        <v-btn type="submit" color="primary" :loading="loading">Iniciar sesión</v-btn>
      </v-card-actions>
    </v-form>
  </v-card>
</template>

<script>
import * as actions from "@js/store/action-types";
export default {
  props: {},
  data() {
    return {
      errors: [],
      email: null,
      password: null,
      valid: false,
      loading: false
    };
  },
  mounted() {},
  methods: {
    login() {
      this.loading = true;
      this.$store
        .dispatch(actions.FAKE_LOGIN)
        .then(response => {
          console.log(response);
        })
        .catch(e => {
          console.log(e);
        })
        .then(() => {
          this.loading = false;
        });
    }
  }
};
</script>
