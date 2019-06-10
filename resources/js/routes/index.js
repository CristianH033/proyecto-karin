import Vue from 'vue'
import Router from 'vue-router'

// Importar componentes de páginas
import Home from '@js/pages/Home.vue';
import Contact from '@js/pages/Contact.vue';
import About from '@js/pages/About.vue';

Vue.use(Router);

let router = new Router({
    routes: [{
            path: '/',
            name: 'home',
            component: Home,
        },
        {
            path: '/contact',
            name: 'contact',
            component: Contact,
        },
        {
            path: '/about',
            name: 'about',
            component: About
        }
    ]
});

export default router