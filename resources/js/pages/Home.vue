<template>
    <div>
        <h2>Inicio</h2>
        <span>Dato desde Home: {{ dato }}</span>
        <h3>Cambiar dato desde Home</h3>
        <button @click="menos">-</button>
        <button @click="mas">+</button>
    </div>
</template>

<script>
export default {
    name: "Home",
    computed: {
        dato() {
            return this.$store.getters.getDato;
        }
    },
    methods: {
        mas() {
            this.$store.commit("incrementDato");
        },
        menos() {
            this.$store.commit("decrementDato");
        }
    }
};
</script>

<style>
</style>
