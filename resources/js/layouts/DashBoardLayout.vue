<template>
    <transition name="dashboard">
        <div>
            <h2>Dashboard Layout - Logged: {{ auth }}</h2>
            <span>Dato desde APP: {{ dato }}</span>
            <nav>
                <router-link :to="{ name: 'home' }">Inicio|</router-link>
                <router-link :to="{ name: 'contact' }">Contacto|</router-link>
                <router-link :to="{ name: 'about' }">Acerca de nosotros</router-link>
                <form action method="post" @submit.prevent="salir">
                    <button type="submit">Salir</button>
                </form>
            </nav>
            <router-view />
        </div>
    </transition>
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
        auth() {
            return this.$store.getters.getAuth;
        },
        dato() {
            return this.$store.getters.getDato;
        }
    },
    created() {},
    mounted() {
        // Eventos de rutas
        // Ruta resuelta
        unregisterBeforeEach = this.$router.beforeEach((to, from, next) => {
            console.log("Ruta solicitada en DashBoardLayout");
            next();
        });
        // Ruta solicitada
        unregisterBeforeResolve = this.$router.beforeResolve(
            (to, from, next) => {
                console.log("Ruta resuelta en DashBoardLayout");
                next();
            }
        );
    },
    beforeDestroy() {
        // Desvincular el evento de rutas
        unregisterBeforeEach();
        unregisterBeforeResolve();
    },
    methods: {
        salir() {
            this.$globalEvent.$emit("logged-out");
        }
    }
};
</script>

<style>
</style>

<style lang="scss" scoped>
.layout-container {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0px;
    left: 0px;
}

.dashboard-leave-active {
    // transition: opacity 0.7s;
    transition-delay: 0s;
}
.dashboard-enter-active {
    // transition: opacity 0.7s;
    transition-delay: 0s;
}
// .dashboard-enter,
.dashboard-leave-to {
    // opacity: 0;
    transition-delay: .7s;
}
</style>

