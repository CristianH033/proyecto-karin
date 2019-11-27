// Importar componentes de páginas

// Componenes de DashBoard
import DashBoardLayout from "@layouts/DashBoardLayout.vue";
const HomePage = () =>
  import(/* webpackChunkName: "js/pages/HomePage" */ "@pages/Home.vue");
const DevicesPage = () =>
  import(/* webpackChunkName: "js/pages/DevicesPage" */ "@pages/Devices.vue");
const HeadQuartersPage = () =>
  import(
    /* webpackChunkName: "js/pages/HeadQuartersPage" */ "@pages/HeadQuarters.vue"
  );
const AboutPage = () =>
  import(/* webpackChunkName: "js/pages/AboutPage" */ "@pages/About.vue");
const UsersPage = () =>
  import(/* webpackChunkName: "js/pages/UsersPage" */ "@pages/Users.vue");

// Componenes de Autenticacion
import AuthLayout from "@layouts/AuthLayout.vue";
const LoginPage = () =>
  import(/* webpackChunkName: "js/pages/LoginPage" */ "@pages/Login.vue");
const RegisterPage = () =>
  import(/* webpackChunkName: "js/pages/RegisterPage" */ "@pages/Register.vue");
const RecoveryPasswordPage = () =>
  import(
    /* webpackChunkName: "js/pages/RecoveryPasswordPage" */ "@pages/RecoveryPassword.vue"
  );
const ResetPasswordPage = () =>
  import(
    /* webpackChunkName: "js/pages/ResetPasswordPage" */ "@pages/ResetPassword.vue"
  );
const VerifyEmailPage = () =>
  import(
    /* webpackChunkName: "js/pages/VerifyEmailPage" */ "@pages/VerifyEmail.vue"
  );
const SendEmailPage = () =>
  import(
    /* webpackChunkName: "js/pages/SendEmailPage" */ "@pages/SendEmail.vue"
  );

const Error404Page = () =>
  import(
    /* webpackChunkName: "js/pages/Error404Page" */ "@pages/errors/404.vue"
  );

const routes = [
  {
    path: "/",
    name: "auth",
    component: AuthLayout,
    meta: {
      guest: true
    },
    redirect: { name: "login" },
    children: [
      {
        path: "/login",
        name: "login",
        component: LoginPage,
        meta: {
          guest: true
        }
      },
      {
        path: "/register",
        name: "register",
        component: RegisterPage,
        meta: {
          guest: true
        }
      },
      {
        path: "/request-password-reset",
        name: "request-password-reset",
        component: RecoveryPasswordPage,
        meta: {
          guest: true
        }
      },
      {
        path: "/reset-password",
        name: "reset-password",
        component: ResetPasswordPage,
        meta: {
          guest: true
        }
      }
    ]
  },
  {
    path: "/",
    name: "dashboard",
    component: DashBoardLayout,
    meta: {
      guest: true
    },
    redirect: { name: "home" },
    children: [
      {
        path: "/home",
        name: "home",
        component: HomePage,
        meta: {
          requiresAuth: true
        }
      },
      {
        path: "/admin/users",
        name: "admin-users",
        component: UsersPage,
        meta: {
          requiresAuth: true
        }
      },
      {
        path: "/devices",
        name: "devices",
        component: DevicesPage,
        meta: {
          requiresAuth: true
        }
      },
      {
        path: "/headquarters",
        name: "headquarters",
        component: HeadQuartersPage,
        meta: {
          requiresAuth: true
        }
      },
      {
        path: "/about",
        name: "about",
        component: AboutPage,
        meta: {
          requiresAuth: true
        }
      }
    ]
  },
  {
    path: "/",
    name: "especial",
    component: AuthLayout,
    children: [
      {
        path: "/email/verify",
        name: "verify",
        component: VerifyEmailPage
      },
      {
        path: "/email/resend",
        name: "resend-email",
        component: SendEmailPage
      }
    ]
  },
  {
    path: "*",
    name: "notfound",
    component: Error404Page
  }
];

export default routes;
