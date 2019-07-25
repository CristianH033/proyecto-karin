<template>
    <div>
        <h2>Acerca de nosotros</h2>
        <span>Dato desde About: {{ dato }}</span>
        <h3>Cambiar dato desde About</h3>
        <button @click="menos">-2</button>
        <button @click="mas">+2</button>
        <input type="number" :value="dato" @input="setDato" />
    </div>
</template>

<script>
export default {
    name: "About",
    computed: {
        dato() {
            return this.$store.getters.getDato;
        }
    },
    methods: {
        mas() {
            this.$store.commit("setDato", this.dato + 2);
        },
        menos() {
            this.$store.commit("setDato", this.dato - 1);
        },
        setDato(e) {
            this.$store.commit("setDato", e.target.value);
        }
    }
};
</script>

<style>
</style>
