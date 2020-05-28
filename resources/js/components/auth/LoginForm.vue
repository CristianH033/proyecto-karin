<template>
  <v-window-item :value="value">
    <v-card-text>
      <v-form
        id="loginForm"
        ref="loginForm"
        v-model="valid"
        @submit.prevent="login"
      >
        <v-text-field
          v-model="credentials.email"
          :disabled="laraLoading"
          label="Usuario"
          name="email"
          prepend-icon="mdi-account-circle"
          type="email"
          :rules="laraRules.email"
          required
          autofocus
        />
        <password-input
          v-model="credentials.password"
          :disabled="laraLoading"
          label="Contraseña"
          name="password"
          prepend-icon="mdi-lock"
          type="password"
          :rules="laraRules.password"
          required
        />
        <v-row>
          <v-spacer />
          <v-btn
            text
            :to="{ name: 'request-password-reset' }"
            color="primary"
            small
            :disabled="laraLoading"
          >
            Olvido su contraseña?
          </v-btn>
        </v-row>
      </v-form>
    </v-card-text>
    <v-card-actions>
      <v-btn
        text
        :to="{ name: 'register' }"
        color="primary"
        :disabled="laraLoading"
      >
        Registrarse
      </v-btn>
      <v-spacer />
      <v-btn
        type="submit"
        color="primary"
        form="loginForm"
        :loading="laraLoading"
      >
        Iniciar sesión
      </v-btn>
    </v-card-actions>
  </v-window-item>
</template>

<script>
import { LOGIN } from "@js/store/action-types";
import laraval from "@mixins/laraval";
import PasswordInput from "@components/inputs/PasswordInput";
export default {
  components: {
    PasswordInput
  },
  mixins: [laraval],
  props: {
    value: {
      type: Number,
      default: null
    },
    step: {
      type: Number,
      default: null
    }
  },
  data: () => ({
    credentials: {
      email: null,
      password: null
    },
    valid: false
  }),
  computed: {},
  watch: {
    step: function() {
      this.checkStep();
    }
  },
  mounted() {
    this.checkStep();
  },
  methods: {
    checkStep() {
      if (this.step == this.value) {
        this.$emit("change-title", "Iniciar sesión");
      }
    },
    login() {
      var campos = ["email", "password"];
      this.laravalResquest(LOGIN, this.credentials, "loginForm", false, campos)
        .then(() => {})
        .catch(() => {});
    }
  }
};
</script>
