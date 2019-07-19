<template>
    <div>
        <h1>Keemble App</h1>
        <h2>Auth Layout - Logged: {{ auth }}</h2>
        <span>Dato desde APP: {{ dato }}</span>
        <nav>
            <router-link :to="{ name: 'login' }">Login|</router-link>
            <router-link :to="{ name: 'register' }">Registro|</router-link>
            <router-link :to="{ name: 'request-password-reset' }">Reset Pwd</router-link>
        </nav>
        <router-view />
    </div>
</template>

<script>
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
    mounted() {},
    methods: {}
}
</script>

<style>

</style>
