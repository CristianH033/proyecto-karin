<template>
    <transition name="fade">
        <router-view />
    </transition>
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
    methods: {}
};
</script>

<style>
</style>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
}
</style>
