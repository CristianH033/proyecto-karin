<template>
  <v-form @submit.prevent="login">
    <v-card class="elevation-12">
      <v-toolbar color="primary" dark flat>
        <v-toolbar-title>Iniciar sesión</v-toolbar-title>
        <v-spacer />
        <v-tooltip bottom>
          <template v-slot:activator="{ on }">
            <v-btn icon large v-on="on">
              <v-icon>mdi-code-tags</v-icon>
            </v-btn>
          </template>
          <span>Source</span>
        </v-tooltip>
      </v-toolbar>
      <v-card-text>
        <v-text-field
          :v-model="email"
          label="Usuario"
          name="login"
          prepend-icon="mdi-account"
          type="text"
        />
        <v-text-field
          id="password"
          v-model="password"
          label="Contraseña"
          name="password"
          prepend-icon="mdi-lock"
          type="password"
        />
      </v-card-text>
      <v-card-actions>
        <v-btn text :to="{name: 'register'}" color="primary">Registrarse</v-btn>
        <v-spacer />
        <v-btn type="submit" color="primary">Iniciar sesión</v-btn>
      </v-card-actions>
    </v-card>
  </v-form>
</template>

<script>
export default {
  props: {},
  data() {
    return {
      errors: [],
      email: null,
      password: null
    };
  },
  mounted() {},
  methods: {
    login() {
      this.$globalEvent.$emit("logged-in");
    }
  }
};
</script>
