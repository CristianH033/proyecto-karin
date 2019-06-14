<template>
    <form method="POST" @submit.prevent="login">
        <input type="email" name="email" v-model="email" id>
        <input type="password" name="password" v-model="password" id>
        <button type="submit">Entrar</button>
    </form>
</template>

<script>
import axios from "axios";
export default {
    data() {
        return {
            errors: [],
            email: null,
            password: null
        };
    },
    methods: {
        login() {
            axios.post("api/login", {
                email: this.email,
                password: this.password
            })
            .then(function(response) {
                console.log(response);
            })
            .catch(function(error) {
                console.log(error);
            });
        }
    }
};
</script>

<style>
</style>
