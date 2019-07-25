<template>
    <form method="POST" @submit.prevent="register">
        <input v-model="email" type="email" name="email" />
        <input v-model="password" type="password" name="password" />
        <input v-model="confirmPassword" type="password" name="confirm-password" />
        <button type="submit">Registrarse</button>
    </form>
</template>

<script>
export default {
    data() {
        return {
            errors: [],
            email: null,
            password: null,
            confirmPassword: null
        };
    },
    mounted() {},
    methods: {
        register() {
            console.log(this.$route.query.redirect);
            this.$store.commit("setAuth", true);
            this.$router.push(this.$route.query.redirect);
        }
    }
};
</script>

<style>
</style>
