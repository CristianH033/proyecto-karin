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
        // this.$globalEvent.$on('logged-in');
        // this.$globalEvent.$emit('logged-in');
    },
    beforeDestroy() {
        // this.$globalEvent.$off('logged-in');
    },
    methods: {},
};
</script>

<style>
</style>
