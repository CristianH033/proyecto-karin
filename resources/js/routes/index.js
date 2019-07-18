import Vue from 'vue'
import Router from 'vue-router'
import store from '@js/store'

// Importar componentes de páginas
import Home from '@js/pages/Home.vue';
import Login from '@js/pages/Login.vue';
import Contact from '@js/pages/Contact.vue';
import About from '@js/pages/About.vue';

Vue.use(Router);

let router = new Router({
    routes: [{
            path: '/',
            name: 'home',
            component: Home,
            meta: {
                requiresAuth: true
            }
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
