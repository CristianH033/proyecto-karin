<template>
    <register-form />
</template>

<script>
import LoadingComponent from "@js/components/LoadingComponent.vue";
import ErrorComponent from "@js/components/ErrorComponent.vue";

const RegisterForm = () => ({
    component: import(
        /* webpackChunkName: "js/components/RegisterForm" */ "@js/components/RegisterForm.vue"
    ),
    loading: LoadingComponent,
    error: ErrorComponent,
    delay: 0
});

export default {
    components: {
        RegisterForm
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
