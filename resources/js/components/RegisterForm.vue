<template>
  <v-card class="elevation-12">
    <v-toolbar color="primary" dark flat>
      <v-toolbar-title>Registrarse</v-toolbar-title>
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
      <v-form>
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
        <v-text-field
          id="confirm_password"
          v-model="confirmPassword"
          label="Contraseña"
          name="password"
          prepend-icon="mdi-lock"
          type="password"
        />
      </v-form>
    </v-card-text>
    <v-card-actions>
      <v-btn text :to="{name: 'login'}" color="primary">Iniciar sesión</v-btn>
      <v-spacer />
      <v-btn color="primary">Registrarse</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      errors: [],
      email: null,
      password: null,
      confirmPassword: null
    };
  },
  mounted() {},
  methods: {
    register() {
      this.$globalEvent.$emit("logged-in");
    }
  }
};
</script>

<style>
</style>
