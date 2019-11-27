<template>
  <div>
    <v-card-text>
      <p>Comprobando inicio de sesión...</p>
      <v-progress-linear :active="true" :indeterminate="true" />
    </v-card-text>
    <v-card-actions></v-card-actions>
  </div>
</template>

<script>
export default {
  props: {
    parentLoading: Boolean
  },
  watch: {},
  mounted() {
    // this.$emit("change-title", "Comprobando inicio de sesión");
  },
  methods: {}
};
</script>
<style></style>
