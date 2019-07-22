<template>
    <div>
        <h1>Marco Principal</h1>
        <router-view />
    </div>
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
        this.$globalEvent.$on('logged-in');
        this.$eventHub.$emit('logged-in');
    },
    beforeDestroy() {
        this.$eventHub.$off('logged-in');
    },
    methods: {},
};
</script>

<style>
</style>
