<template>
  <v-app id="kemble-app" app>
    <v-progress-linear
      :active="loading"
      :indeterminate="loading"
      absolute
      top
    ></v-progress-linear>
    <v-content>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="4">
            <transition name="fade" mode="out-in">
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
  data: () => ({
    loading: false
  }),
  computed: {},
  created() {},
  mounted() {
    // Eventos de rutas
    unregisterBeforeEach = this.$router.beforeEach((to, from, next) => {
      // Ruta solicitada
      this.loading = true;
      next();
    });
    unregisterBeforeResolve = this.$router.beforeResolve((to, from, next) => {
      // Ruta resuelta
      this.loading = false;
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

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s, transform 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
  transform: translateY(15px);
}
</style>
