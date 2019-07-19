<template>
    <form method="POST" @submit.prevent="register">
        <input v-model="password" type="password" name="password">
        <input v-model="confirmPassword" type="password" name="confirm-password">
        <button type="submit">Reestablecer contraseña</button>
    </form>
</template>

<script>
export default {

}
</script>

<style>

</style>
