import Vue from 'vue';
import Vuex from 'vuex';
import movie from './modules/movie';
import favorite from './modules/favorite';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        loading: false,
    },
    getters: {
        getLoadingStatus(state) {
            return state.loading;
        },
    },
    mutations: {
        updateLoadingStatus(state, payload) {
            state.loading = payload;
        },
    },
    modules: {
        movie,
        favorite,
    },
});
