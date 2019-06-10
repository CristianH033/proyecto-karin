import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        dato: 0
    },
    getters: {
        getDato: state => {
            return Number(state.dato);
        }
    },
    mutations: {
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