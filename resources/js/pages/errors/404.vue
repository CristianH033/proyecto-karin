<template>
  <v-app id="kemble-app" app>
    <v-content>
      <v-container fill-height style="height: calc(100vh - 58px);">
        <v-layout align-center>
          <v-flex text-center>
            <h1 class="display-2 primary--text">Error 404</h1>
            <p>La página que está buscando no existe</p>
            <v-btn :to="{ name: 'home' }" outlined color="primary">
              Salir de aquí
            </v-btn>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: "FourOhFour",
  props: {},
  created() {}
};
</script>
