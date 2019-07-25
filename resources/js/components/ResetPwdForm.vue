<template>
    <form method="POST" @submit.prevent="reset">
        <input v-model="password" type="password" name="password" />
        <input v-model="confirmPassword" type="password" name="confirm-password" />
        <button type="submit">Reestablecer contraseña</button>
    </form>
</template>

<script>
export default {
    data() {
        return {
            errors: [],
            password: null,
            confirmPassword: null
        };
    },
    mounted() {},
    methods: {
        reset() {}
    }
};
</script>

<style>
</style>
