// Importar componentes de páginas

// Componenes de DashBoard
import DashBoardLayout from '@js/layouts/DashBoardLayout.vue'
// const DashBoardLayout = () => import(/* webpackChunkName: "js/layouts/DashBoardLayout" */ '@js/layouts/DashBoardLayout.vue');
const Home = () => import(/* webpackChunkName: "js/pages/Home" */ '@js/pages/Home.vue');
const Contact = () => import(/* webpackChunkName: "js/pages/Contact" */ '@js/pages/Contact.vue');
const About = () => import(/* webpackChunkName: "js/pages/About" */ '@js/pages/About.vue');

// Componenes de Autenticacion
import AuthLayout from '@js/layouts/AuthLayout.vue'
// const AuthLayout = () => import(/* webpackChunkName: "js/layouts/AuthLayout" */ '@js/layouts/AuthLayout.vue');
const Login = () => import(/* webpackChunkName: "js/pages/Login" */ '@js/pages/Login.vue');
const Register = () => import(/* webpackChunkName: "js/pages/Register" */ '@js/pages/Register.vue');
const RequestResetPassword = () => import(/* webpackChunkName: "js/pages/RequestResetPassword" */ '@js/pages/RequestResetPassword.vue');
const ResetPassword = () => import(/* webpackChunkName: "js/pages/ResetPassword" */ '@js/pages/ResetPassword.vue');

const routes = [
    {
        path: '/',
        name: 'auth',
        component: AuthLayout,
        meta: {
            guest: true
        },
        redirect: { name: 'login' },
        children: [
            {
                path: '/login',
                name: 'login',
                component: Login,
                meta: {
                    guest: true
                }
            },
            {
                path: '/register',
                name: 'register',
                component: Register,
                meta: {
                    guest: true
                }
            },
            {
                path: '/request-password-reset',
                name: 'request-password-reset',
                component: RequestResetPassword,
                meta: {
                    guest: true
                }
            },
            {
                path: '/reset-password',
                name: 'reset-password',
                component: ResetPassword,
                meta: {
                    guest: true
                }
            },
        ]
    },
    {
        path: '/',
        name: 'dashboard',
        component: DashBoardLayout,
        meta: {
            guest: true
        },
        redirect: { name: 'home' },
        children: [
            {
                path: '/home',
                name: 'home',
                component: Home,
                meta: {
                    requiresAuth: true
                }
            },
            {
                path: '/contact',
                name: 'contact',
                component: Contact,
                meta: {
                    requiresAuth: true
                }
            },
            {
                path: '/about',
                name: 'about',
                component: About,
                meta: {
                    requiresAuth: true
                }
            }
        ]
    },
]

export default routes
