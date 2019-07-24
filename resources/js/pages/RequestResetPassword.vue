<template>
    <recovery-password-form />
</template>

<script>
import LoadingComponent from '@js/components/LoadingComponent.vue'
import ErrorComponent from '@js/components/ErrorComponent.vue'

const RecoveryPasswordForm = () => ({
    component: import( /* webpackChunkName: "js/components/RecoveryPasswordForm" */ '@js/components/RecoveryPasswordForm.vue'),
    loading: LoadingComponent,
    error: ErrorComponent,
    delay: 0,
})

export default {
    components: {
        RecoveryPasswordForm
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
