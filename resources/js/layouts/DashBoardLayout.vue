<template>
    <div>
        <h2>Dashboard Layout - Logged: {{ auth }}</h2>
        <span>Dato desde APP: {{ dato }}</span>
        <nav>
            <router-link :to="{ name: 'home' }">Inicio|</router-link>
            <router-link :to="{ name: 'contact' }">Contacto|</router-link>
            <router-link :to="{ name: 'about' }">Acerca de nosotros</router-link>
            <button @click="salir">Salir</button>
        </nav>
        <router-view />
    </div>
</template>

<script>
let unregisterBeforeEach, unregisterBeforeResolve;
export default {
    name: "Dashboard",
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
            console.log("Ruta solicitada en DashBoardLayout");
            next();
        });
        unregisterBeforeResolve = this.$router.beforeResolve((to, from, next) => {
            console.log("Ruta resuelta en DashBoardLayout")
            next();
        });
    },
    beforeDestroy(){
        console.log("destruido")
        unregisterBeforeEach()
        unregisterBeforeResolve()
    },
    methods: {
        salir(){
            this.$store.commit('setAuth', false)
            this.$router.push({name: 'login'})
        }
    }
}
</script>

<style>

</style>
