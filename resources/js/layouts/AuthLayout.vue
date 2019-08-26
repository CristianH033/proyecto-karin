<template>
  <v-app id="kemble-app" app>
    <v-content>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="4">
            <transition name="fade-transition" mode="out-in">
              <router-view />
            </transition>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
let unregisterBeforeEach, unregisterBeforeResolve;
export default {
  name: "Auth",
  components: {},
  data: function() {
    return {};
  },
  computed: {},
  created() {},
  mounted() {
    // Eventos de rutas
    unregisterBeforeEach = this.$router.beforeEach((to, from, next) => {
      // Ruta solicitada
      next();
    });
    unregisterBeforeResolve = this.$router.beforeResolve((to, from, next) => {
      // Ruta resuelta
      next();
    });
  },
  beforeDestroy() {
    // Desvincular el evento de rutas
    unregisterBeforeEach();
    unregisterBeforeResolve();
  },
  methods: {}
};
</script>
