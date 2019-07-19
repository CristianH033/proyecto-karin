import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersist from 'vuex-persist'

Vue.use(Vuex)

const vuexPersist = new VuexPersist({
    key: 'my-app',
    storage: localStorage
})

export default new Vuex.Store({
    state: {
        auth: false,
        dato: 0
    },
    getters: {
        getAuth: state => {
            return state.auth;
        },
        getDato: state => {
            return Number(state.dato);
        }
    },
    mutations: {
        setAuth(state, valor) {
            state.auth = valor;
        },
        setDato(state, dato) {
            state.dato = dato;
        },
        incrementDato(state) {
            state.dato++;
        },
        decrementDato(state) {
            state.dato--;
        },
    },
    actions: {

    },
    plugins: [vuexPersist.plugin]
})