<template>
    <form method="POST" @submit.prevent="login">
        <input v-model="email" type="email" name="email">
        <input v-model="password" type="password" name="password">
        <button type="submit">Entrar</button>
    </form>
</template>

<script>
// import axios from "axios";
export default {
    data() {
        return {
            errors: [],
            email: null,
            password: null
        };
    },
    mounted(){

    },
    methods: {
        login() {
            console.log(this.$route.query.redirect);
            this.$store.commit('setAuth', true)
            if(this.$route.query.redirect){
                this.$router.push(this.$route.query.redirect)
            }else{
                this.$router.push({name: 'home'})
            }
            // axios.post("api/login", {
                // email: this.email,
                // password: this.password
            // })
            // .then(function(response) {
                // console.log(response);
            // })
            // .catch(function(error) {
                // console.log(error);
            // });
        }
    }
};
</script>

<style>
</style>
