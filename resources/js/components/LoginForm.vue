<template>
    <div class="card panel-login my-4 mx-auto p-4">
        <h3>Iniciar Sesión</h3>
        <hr />
        <!-- <form method="POST" @submit.prevent="login">
            <input v-model="email" type="email" name="email" />
            <input v-model="password" type="password" name="password" />
            <button type="submit">Entrar</button>
        </form> -->
        <form method="POST" @submit.prevent="login">
            <div class="form-group">
                <label>Email</label>
                <div class="input-group">
                    <span class="input-group-addon">
                        <i class="fa fa-user" />
                    </span>
                    <input type="text" class="form-control username" placeholder="contoso@keemble.com" />
                </div>
            </div>
            <div class="form-group">
                <label>Contraseña</label>
                <div class="input-group">
                    <span class="input-group-addon">
                        <i class="fa fa-star" />
                    </span>
                    <input type="password" class="form-control password" placeholder="*****" />
                </div>
            </div>
            <hr />
            <button type="button" class="btn btn-success">
                <i class="fa fa-arrow-left" />
                Back
            </button>
            <button type="submit" class="btn btn-primary">
                <i class="fa fa-key" />
                Login
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
            password: null
        };
    },
    mounted() {},
    methods: {
        login() {
            this.$globalEvent.$emit("logged-in");
        }
    }
};
</script>
