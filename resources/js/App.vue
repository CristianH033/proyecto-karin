<template>
    <div>
        <h1>Karim App</h1>
        <span>Dato desde APP: {{ dato }}</span>
        <nav>
            <router-link :to="{ name: 'home' }">Inicio|</router-link>
            <router-link :to="{ name: 'contact' }">Contacto|</router-link>
            <router-link :to="{ name: 'about' }">Acerca de nosotros</router-link>
        </nav>
        <router-view />
    </div>
</template>

<script>
export default {
    name: "App",
    components: {},
    data: function() {
        return {};
    },
    computed: {
        dato(){
            return this.$store.getters.getDato;
        }
    },
    created() {},
    mounted() {},
    methods: {}
};
</script>

<style>
</style>
