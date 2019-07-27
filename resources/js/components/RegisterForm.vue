<template>
    <div class="card panel-login my-4 mx-auto p-4">
        <h3>Registrarse</h3>
        <hr />
        <form method="POST" @submit.prevent="register">
            <div class="form-group">
                <label>Email</label>
                <div class="input-group">
                    <div class="input-group-prepend">
                        <span class="input-group-text">
                            <i class="fa fa-user" />
                        </span>
                    </div>
                    <input
                        v-model="email"
                        type="text"
                        class="form-control username"
                        placeholder="user@keemble.com"
                    />
                </div>
            </div>
            <div class="form-group">
                <label>Contraseña</label>
                <div class="input-group">
                    <div class="input-group-prepend">
                        <span class="input-group-text">
                            <i class="fa fa-key" />
                        </span>
                    </div>
                    <input
                        v-model="password"
                        type="password"
                        class="form-control password"
                        placeholder="*****"
                    />
                </div>
            </div>
            <div class="form-group">
                <label>Repetir Contraseña</label>
                <div class="input-group">
                    <div class="input-group-prepend">
                        <span class="input-group-text">
                            <i class="fa fa-key" />
                        </span>
                    </div>
                    <input
                        v-model="confirmPassword"
                        type="password"
                        class="form-control password"
                        placeholder="*****"
                    />
                </div>
            </div>
            <hr />
            <button type="button" class="btn btn-success">
                <i class="fa fa-arrow-left" />
                Back
            </button>
            <button type="submit" class="btn btn-primary">
                <i class="fa fa-sign-in-alt" />
                Registrarse
            </button>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            errors: [],
            email: null,
            password: null,
            confirmPassword: null
        };
    },
    mounted() {},
    methods: {
        register() {
            this.$globalEvent.$emit("logged-in");
        }
    }
};
</script>

<style>
</style>
