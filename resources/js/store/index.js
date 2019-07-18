import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

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

    }
})
