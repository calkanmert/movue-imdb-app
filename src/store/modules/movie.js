import Vue from 'vue';

const state = {
    apiKey: 'ae1703d5',
    movies: null,
    movie: {},
};

const getters = {
    getMovies(state) {
        return state.movies;
    },
    getMovie(state) {
        return state.movie;
    },
};

const mutations = {
    updateMovieList(state, payload) {
        state.movies = payload;
    },
    updateMovie(state, payload) {
        state.movie = payload;
    },
    clearMovie(state) {
        state.movie = null;
    },
    clearMovieList(state) {
        state.movies = null;
    },
};

const actions = {
    searchMovie({ commit, state }, payload) {
        commit('clearMovieList');
        commit('updateLoadingStatus', true);
        Vue.http.get(`https://www.omdbapi.com/?s=${payload}&apikey=${state.apiKey}`)
            .then((result) => {
                commit('updateMovieList', result.body.Search);
                commit('updateLoadingStatus', false);
            });
    },
    fetchMovie({ commit, state }, payload) {
        commit('updateLoadingStatus', true);
        Vue.http.get(`https://www.omdbapi.com/?i=${payload}&apikey=${state.apiKey}`)
            .then((result) => {
                commit('updateMovie', result.body);
                commit('updateLoadingStatus', false);
            });
    },
};

export default {
    state,
    getters,
    mutations,
    actions,
};
