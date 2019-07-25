// Importar componentes de páginas

// Componenes de DashBoard
import DashBoardLayout from "@layouts/DashBoardLayout.vue";
const Home = () => import(/* webpackChunkName: "js/pages/Home" */ "@pages/Home.vue");
const Contact = () => import(/* webpackChunkName: "js/pages/Contact" */ "@pages/Contact.vue");
const About = () => import(/* webpackChunkName: "js/pages/About" */ "@pages/About.vue");

// Componenes de Autenticacion
import AuthLayout from "@layouts/AuthLayout.vue";
const Login = () => import(/* webpackChunkName: "js/pages/Login" */ "@pages/Login.vue");
const Register = () => import(/* webpackChunkName: "js/pages/Register" */ "@pages/Register.vue");
const RecoveryPassword = () => import(/* webpackChunkName: "js/pages/RecoveryPassword" */ "@pages/RecoveryPassword.vue");
const ResetPassword = () => import(/* webpackChunkName: "js/pages/ResetPassword" */ "@pages/ResetPassword.vue");

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
                component: Login,
                meta: {
                    guest: true
                }
            },
            {
                path: "/register",
                name: "register",
                component: Register,
                meta: {
                    guest: true
                }
            },
            {
                path: "/request-password-reset",
                name: "request-password-reset",
                component: RecoveryPassword,
                meta: {
                    guest: true
                }
            },
            {
                path: "/reset-password",
                name: "reset-password",
                component: ResetPassword,
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
                component: Home,
                meta: {
                    requiresAuth: true
                }
            },
            {
                path: "/contact",
                name: "contact",
                component: Contact,
                meta: {
                    requiresAuth: true
                }
            },
            {
                path: "/about",
                name: "about",
                component: About,
                meta: {
                    requiresAuth: true
                }
            }
        ]
    }
];

export default routes;
