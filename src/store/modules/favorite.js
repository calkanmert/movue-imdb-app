const state = {
    favoriteMovies: [],
};

const getters = {
    getFavoriteMovieList(state) {
        return state.favoriteMovies;
    },
    getFavoriteMovie: (state) => (id) => {
        const items = [];
        for (let i = 0; i < state.favoriteMovies.length; i += 1) {
            items.push(state.favoriteMovies[i].imdbID);
        }
        return items.find((element) => element === id);
    },
};

const mutations = {
    changeFavoriteMovies(state, payload) {
        state.favoriteMovies = payload;
    },
    pushFavoriteMovie(state, payload) {
        state.favoriteMovies.push(payload);
    },
};

const actions = {
    favoriteInit({ commit, state }) {
        if (localStorage.getItem('favorites')) {
            commit('changeFavoriteMovies', JSON.parse(localStorage.getItem('favorites')));
        } else {
            localStorage.setItem('favorites', JSON.stringify([]));
        }
    },
    addNewFavoriteMovie({ commit, state }, payload) {
        commit('pushFavoriteMovie', payload);
        const movies = [
            ...JSON.parse(localStorage.getItem('favorites')),
            payload,
        ];
        localStorage.setItem('favorites', JSON.stringify(movies));
    },
    removeFavoriteMovie({ commit }, payload) {
        const favorites = JSON.parse(localStorage.getItem('favorites'));
        for (let i = 0; i < favorites.length; i += 1) {
            if (favorites[i].imdbID === payload.imdbID) {
                favorites.splice(i, 1);
                localStorage.setItem('favorites', JSON.stringify(favorites));
                commit('changeFavoriteMovies', favorites);
            }
        }
    },
};

export default {
    state,
    getters,
    mutations,
    actions,
};
