<template>
    <form method="POST" @submit.prevent="enviar">
        <input type="email" name="email">
        <button type="submit">Enviar</button>
    </form>
</template>

<script>
export default {
    data() {
        return {
            email: null,
        };
    },
    mounted(){},
    methods: {
        enviar(){

        }
    }
}
</script>

<style>

</style>
