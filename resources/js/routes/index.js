import Vue from 'vue'
import Router from 'vue-router'
import store from '@js/store'

// Importar componentes de páginas

// Componenes de DashBoard
import DashBoardLayout from '@js/layouts/DashBoardLayout.vue';
import Home from '@js/pages/Home.vue';
import Contact from '@js/pages/Contact.vue';
import About from '@js/pages/About.vue';
// Componenes de Autenticacion
import AuthLayout from '@js/layouts/AuthLayout.vue';
import Login from '@js/pages/Login.vue';
import Register from '@js/pages/Register.vue';
import RequestResetPassword from '@js/pages/RequestResetPassword.vue';
import ResetPassword from '@js/pages/ResetPassword.vue';

Vue.use(Router);

let router = new Router({
    routes: [
        {
            path: '/',
            name: 'auth',
            component: AuthLayout,
            meta: {
                guest: true
            },
            children: [
                {
                    path: '/',
                    redirect: { name: 'login' }
                },
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
});

router.beforeEach((to, from, next) => {
    if(to.matched.some(record => record.meta.requiresAuth)) {
        if (store.getters.getAuth == false) {
            next({
                name: 'login',
                query: { redirect: to.fullPath }
            })
        } else {
            next()
        }
    } else if(to.matched.some(record => record.meta.guest)) {
        if(store.getters.getAuth == false){
            next()
        }
        else{
            next({ name: 'home' })
        }
    }else {
        next()
    }
});

export default router
