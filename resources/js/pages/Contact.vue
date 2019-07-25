<template>
    <div>
        <h2>Contacto</h2>
        <span>Dato desde Contact: {{ dato }}</span>
        <h3>Cambiar dato desde Contact</h3>
        <button @click="menos">-</button>
        <button @click="mas">+</button>
    </div>
</template>

<script>
export default {
    name: "Contact",
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
