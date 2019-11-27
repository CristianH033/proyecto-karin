<template>
  <v-text-field
    :value="password"
    :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
    :name="name"
    :label="label"
    :prepend-icon="prependIcon"
    :rules="rules"
    :type="show ? 'text' : 'password'"
    :disabled="disabled"
    required
    @input="e => $emit('input', e)"
    @click:append="show = !show"
  ></v-text-field>
</template>

<script>
export default {
  props: {
    password: {
      type: String,
      default: null
    },
    autofocus: Boolean,
    clearable: Boolean,
    clearIcon: {
      type: String,
      default: "$clear"
    },
    rules: {
      type: Array,
      default: () => []
    },
    counter: { type: [Boolean, Number, String], default: null },
    disabled: Boolean,
    filled: Boolean,
    flat: Boolean,
    fullWidth: Boolean,
    label: { type: String, default: null },
    name: { type: String, default: null },
    outlined: Boolean,
    placeholder: { type: String, default: null },
    reverse: Boolean,
    rounded: Boolean,
    shaped: Boolean,
    singleLine: Boolean,
    solo: Boolean,
    soloInverted: Boolean,
    prependIcon: { type: String, default: null }
  },
  data: () => ({
    show: false
  })
};
</script>

<style></style>
