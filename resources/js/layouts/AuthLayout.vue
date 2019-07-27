<template>
    <transition appear="false" name="auth">
        <div class="layout-container container-fluid">
            <h2>Auth Layout - Logged: {{ auth }}</h2>
            <nav>
                <router-link :to="{ name: 'login' }">Login|</router-link>
                <router-link :to="{ name: 'register' }">Registro|</router-link>
                <router-link :to="{ name: 'request-password-reset' }">Recuperar Password|</router-link>
                <router-link :to="{ name: 'reset-password' }">Restablecer Password</router-link>
            </nav>
            <div class="row justify-content-center">
                <div class="col col-lg-4 col-md-6">
                    <transition name="auth-ly-fade" mode="out-in">
                        <router-view />
                    </transition>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
let unregisterBeforeEach, unregisterBeforeResolve;
export default {
    name: "Auth",
    components: {},
    data: function() {
        return {};
    },
    computed: {
        auth() {
            return this.$store.getters.getAuth;
        }
    },
    created() {},
    mounted() {
        unregisterBeforeEach = this.$router.beforeEach((to, from, next) => {
            console.log("Ruta solicitada en AuthLayout");
            next();
        });
        unregisterBeforeResolve = this.$router.beforeResolve(
            (to, from, next) => {
                console.log("Ruta resuelta en AuthLayout");
                next();
            }
        );
    },
    beforeDestroy() {
        console.log("destruido");
        unregisterBeforeEach();
        unregisterBeforeResolve();
    },
    methods: {}
};
</script>

<style>
</style>

<style lang="scss" scoped>
$bg: #2d2d2d;
$white: white;

.layout-container {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0px;
    left: 0px;
    background-color: $bg;
    z-index: 100;
    will-change: transform;
    transition: transform 0.7;
    // color: $white;
}

.auth-enter-active,
.auth-leave-active {
    transition: transform 0.7s;
    transition-delay: 0s;
}
.auth-enter,
.auth-leave-to {
    transform: translateY(-100%);
}

.auth-ly-fade-enter-active,
.auth-ly-fade-leave-active {
    transition: opacity 0.3s, transform 0.3s;
}

.auth-ly-fade-enter,
.auth-ly-fade-leave-to {
    opacity: 0;
    transform: translateY(-10px);
}
</style>
