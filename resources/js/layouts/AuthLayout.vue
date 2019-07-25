<template>
    <div class="layout-container">
        <h2>Auth Layout - Logged: {{ auth }}</h2>
        <span>Dato desde APP: {{ dato }}</span>
        <nav>
            <router-link :to="{ name: 'login' }">Login|</router-link>
            <router-link :to="{ name: 'register' }">Registro|</router-link>
            <router-link :to="{ name: 'request-password-reset' }">Recuperar Password|</router-link>
            <router-link :to="{ name: 'reset-password' }">Restablecer Password</router-link>
        </nav>
        <transition name="auth-ly-fade" mode="out-in">
            <router-view />
        </transition>
    </div>
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
        },
        dato() {
            return this.$store.getters.getDato;
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
$blue: #002a46;
$white: white;

.layout-container {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0px;
    left: 0px;
    background-color: $blue;
    color: $white;
}

.auth-ly-fade-enter-active,
.auth-ly-fade-leave-active {
    transition: opacity 0.3s, transform 0.3s;
}

.auth-ly-fade-enter, .auth-ly-fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
    transform: translateY(-10px);
}
</style>
