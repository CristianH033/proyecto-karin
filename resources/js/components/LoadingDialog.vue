<template>
  <v-dialog
    :value="value"
    transition="slide-y-reverse-transition"
    persistent
    width="300"
  >
    <v-card color="primary" dark>
      <v-card-text>
        <v-row>
          <v-col>
            <span class="subtitle-1">
              Por favor espere...
            </span>
          </v-col>
        </v-row>
        <v-progress-linear
          indeterminate
          color="white"
          class="mb-0"
        ></v-progress-linear>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: {
    value: Boolean
  }
};
</script>

<style></style>
