<template>
    <router-view />
</template>

<script>
export default {
    name: "App",
    components: {},
    data: function() {
        return {};
    },
    computed: {},
    created() {},
    mounted() {
        // Evento global (login)
        this.$globalEvent.$on("logged-in", () => {
            this.$store.commit("setAuth", true);
            if (this.$route.query.redirect) {
                this.$router.push(this.$route.query.redirect);
            } else {
                this.$router.push({ name: "home" });
            }
        });
        // Evento global (logout)
        this.$globalEvent.$on("logged-out", () => {
            this.$store.commit("setAuth", false);
            this.$router.push({ name: "login" });
        });
    },
    beforeDestroy() {
        this.$globalEvent.$off("logged-in");
        this.$globalEvent.$off("logged-out");
    },
    methods: {}
};
</script>

<style>
</style>

<style lang="scss" scoped>
</style>
