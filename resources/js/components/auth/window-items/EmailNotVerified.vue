<template>
  <div>
    <v-card-text>
      <v-row>
        <v-col cols="12">
          <v-alert dense outlined type="error">
            {{ parentErrorMessage }}
          </v-alert>
        </v-col>
      </v-row>
    </v-card-text>
    <v-card-actions>
      <v-btn
        color="primary"
        text
        :loading="parentLoading"
        :disabled="laraLoading"
        @click="$emit('back')"
      >
        <v-icon left>mdi-arrow-left</v-icon>
        atras
      </v-btn>
      <v-spacer />
      <v-btn
        color="primary"
        :disabled="parentLoading"
        :loading="laraLoading"
        @click="resend"
      >
        Reenviar correo
      </v-btn>
    </v-card-actions>
  </div>
</template>

<script>
import laraval from "@mixins/laraval";
import { RESEND_EMAIL } from "@store/action-types";
import { mapGetters } from "vuex";
export default {
  mixins: [laraval],
  props: {
    parentErrorMessage: {
      type: String,
      default: null
    },
    parentLoading: Boolean
  },
  data: () => ({}),
  computed: {
    ...mapGetters({ user: "attemptUser" })
  },
  mounted() {
    this.$emit("change-title", "Correo no verificado");
  },
  methods: {
    resend: function() {
      this.laravalResquest(RESEND_EMAIL, this.user.email, null, true);
    }
  }
};
</script>

<style></style>
