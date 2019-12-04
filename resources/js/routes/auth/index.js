// Importar componentes de páginas

// Componenes de Autenticacion
import AuthLayout from "@layouts/AuthLayout.vue";
const LoginPage = () =>
  import(/* webpackChunkName: "js/pages/LoginPage" */ "@pages/auth/Login.vue");
const RegisterPage = () =>
  import(
    /* webpackChunkName: "js/pages/RegisterPage" */ "@pages/auth/Register.vue"
  );
const RecoveryPasswordPage = () =>
  import(
    /* webpackChunkName: "js/pages/RecoveryPasswordPage" */ "@pages/auth/RecoveryPassword.vue"
  );
const ResetPasswordPage = () =>
  import(
    /* webpackChunkName: "js/pages/ResetPasswordPage" */ "@pages/auth/ResetPassword.vue"
  );

const routes = [
  {
    path: "/",
    name: "auth",
    component: AuthLayout,
    meta: {
      guest: true,
      title: ""
    },
    redirect: { name: "login" },
    children: [
      {
        path: "/login",
        name: "login",
        component: LoginPage,
        meta: {
          guest: true,
          title: "Iniciar sesión"
        }
      },
      {
        path: "/register",
        name: "register",
        component: RegisterPage,
        meta: {
          guest: true,
          title: "Registro"
        }
      },
      {
        path: "/request-password-reset",
        name: "request-password-reset",
        component: RecoveryPasswordPage,
        meta: {
          guest: true,
          title: "Recuperar contraseña"
        }
      },
      {
        path: "/reset-password",
        name: "reset-password",
        component: ResetPasswordPage,
        meta: {
          guest: true,
          title: "Restablecer contraseña"
        }
      }
    ]
  }
];

export default routes;
