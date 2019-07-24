<template>
    <div>
        <h2>Auth Layout - Logged: {{ auth }}</h2>
        <span>Dato desde APP: {{ dato }}</span>
        <nav>
            <router-link :to="{ name: 'login' }">Login|</router-link>
            <router-link :to="{ name: 'register' }">Registro|</router-link>
            <router-link :to="{ name: 'request-password-reset' }">Recuperar Password|</router-link>
            <router-link :to="{ name: 'reset-password' }">Restablecer Password</router-link>
        </nav>
        <router-view />
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
        auth(){
            return this.$store.getters.getAuth;
        },
        dato(){
            return this.$store.getters.getDato;
        }
    },
    created() {},
    mounted() {
        unregisterBeforeEach = this.$router.beforeEach((to, from, next) => {
            console.log("Ruta solicitada en AuthLayout");
            next();
        });
        unregisterBeforeResolve = this.$router.beforeResolve((to, from, next) => {
            console.log("Ruta resuelta en AuthLayout")
            next();
        });
    },
    beforeDestroy(){
        console.log("destruido")
        unregisterBeforeEach()
        unregisterBeforeResolve()
    },
    methods: {},
}
</script>

<style>

</style>
