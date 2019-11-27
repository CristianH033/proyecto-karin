<template>
  <div>
    <v-card-text>
      <v-row>
        <v-col cols="12"></v-col>
        <v-col cols="12">
          <v-alert type="error" multi-line>
            <p>Ocurrió un error:</p>
            <p>ErrorMessage: {{ parentErrorMessage }}</p>
          </v-alert>
        </v-col>
      </v-row>
    </v-card-text>
    <v-card-actions>
      <v-btn color="primary" text @click="back">
        <v-icon left>mdi-arrow-left</v-icon>
        atras
      </v-btn>
      <v-spacer />
      <v-btn color="error" @click="refresh">
        <v-icon>mdi-refresh</v-icon>
        Recargar
      </v-btn>
    </v-card-actions>
  </div>
</template>

<script>
export default {
  props: {
    parentErrorMessage: { type: String, default: "Error" }
  },
  mounted() {
    this.$emit("change-title", "Error fatal");
  },
  methods: {
    refresh: function() {
      window.location.reload(false);
    },
    back: function() {
      this.$emit("back");
    }
  }
};
</script>

<style></style>
