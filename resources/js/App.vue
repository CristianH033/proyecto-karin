<template>
    <div>
        <h1>Karim App</h1>
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
    created() {},
    mounted() {},
    methods: {}
};
</script>

<style>
</style>
