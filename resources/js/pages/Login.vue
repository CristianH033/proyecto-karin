<template>
    <login-form />
</template>

<script>
import LoadingComponent from "@js/components/LoadingComponent.vue";
import ErrorComponent from "@js/components/ErrorComponent.vue";

const LoginForm = () => ({
    component: import(
        /* webpackChunkName: "js/components/LoginForm" */ "@js/components/LoginForm.vue"
    ),
    loading: LoadingComponent,
    error: ErrorComponent,
    delay: 0
});

export default {
    components: {
        LoginForm
    },
    data() {
        return {};
    },
    mounted() {},
    methods: {}
};
</script>

<style>
</style>
