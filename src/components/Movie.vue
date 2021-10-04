<template>
    <div class="container" v-if="Object.keys(getMovie).length > 0">
        <div class="row mt-5 d-flex justify-content-center">
            <div class="col-md-9 d-flex justify-content-end">
                <a :href="`https://www.imdb.com/title/${getMovie.imdbID}`" target="_blank"><button class="btn text-light btn-sm mt-3" style="background: #000; margin-right:10px">IMDB</button></a>
                <button v-if="getFavoriteMovie(getMovie.imdbID)" @click="removeFavoriteMovie({ Title: getMovie.Title, Type: getMovie.Type, Year: getMovie.Year, imdbID: getMovie.imdbID, Poster: getMovie.Poster })" class="btn text-light btn-sm mt-3" style="background: #ce181e">Remove from Favorites</button>
                <button v-else @click="addNewFavoriteMovie({ Title: getMovie.Title, Type: getMovie.Type, Year: getMovie.Year, imdbID: getMovie.imdbID, Poster: getMovie.Poster })" class="btn text-light btn-sm mt-3" style="background: #003666">Add to Favorites</button>
            </div>
        </div>
        <div class="row d-flex justify-content-center">
            <div class="col-md-9 bg-white shadow-sm mt-3 mb-5 p-4">
                <div class="d-flex">
                    <img :src="getMovie.Poster !== 'N/A' ? getMovie.Poster : 'https://i.hizliresim.com/a3258ou.png'" class="rounded" style="width: 350px">
                    <div style="margin-left: 30px; width:100%">
                        <ul style="width: 100%" class="list-group mt-1 rounded-0">
                            <li class="list-group-item text-light" style="background: #000">Informations</li>
                            <li class="list-group-item"><strong>Title: </strong>{{ getMovie.Title }}</li>
                            <li class="list-group-item"><strong>Type: </strong> {{ getMovie.Type }}</li>
                            <li class="list-group-item"><strong>Year: </strong>{{ getMovie.Year }}</li>
                            <li class="list-group-item"><strong>Rated: </strong>{{ getMovie.Rated }}</li>
                            <li class="list-group-item"><strong>Released: </strong>{{ getMovie.Released }}</li>
                            <li class="list-group-item"><strong>Runtime: </strong>{{ getMovie.Runtime }}</li>
                            <li class="list-group-item"><strong>Genre: </strong>{{ getMovie.Genre }}</li>
                            <li class="list-group-item"><strong>Director: </strong>{{ getMovie.Director }}</li>
                            <li class="list-group-item"><strong>Metascore: </strong>{{ getMovie.Metascore }}</li>
                            <li class="list-group-item"><strong>IMDB Rating: </strong>{{ getMovie.imdbRating }}</li>
                        </ul>
                    </div>
                </div>
                <div class="mt-5">
                    <ul style="width: 100%" class="list-group mt-3 rounded-0">
                        <li class="list-group-item text-light" style="background: #000">Plot</li>
                        <li class="list-group-item">{{ getMovie.Plot }}</li>
                    </ul>
                    <ul style="width: 100%" class="list-group mt-3 rounded-0">
                        <li class="list-group-item text-light" style="background: #000">Writers</li>
                        <li class="list-group-item">{{ getMovie.Writer }}</li>
                    </ul>
                    <ul style="width: 100%" class="list-group mt-3 rounded-0">
                        <li class="list-group-item text-light" style="background: #000">Actors</li>
                        <li class="list-group-item">{{ getMovie.Actors }}</li>
                    </ul>
                    <ul style="width: 100%" class="list-group mt-3 rounded-0">
                        <li class="list-group-item text-light" style="background: #000">Language</li>
                        <li class="list-group-item">{{ getMovie.Language }}</li>
                    </ul>
                    <ul style="width: 100%" class="list-group mt-3 rounded-0">
                        <li class="list-group-item text-light" style="background: #000">Country</li>
                        <li class="list-group-item">{{ getMovie.Country }}</li>
                    </ul>
                    <ul style="width: 100%" class="list-group mt-3 rounded-0">
                        <li class="list-group-item text-light" style="background: #000">Awards</li>
                        <li class="list-group-item">{{ getMovie.Awards }}</li>
                    </ul>
                    <ul style="width: 100%" class="list-group mt-3 rounded-0">
                        <li class="list-group-item text-light" style="background: #000">Ratings</li>
                        <li v-for="(rating, key) in getMovie.Ratings" :key="key" class="list-group-item">{{ rating.Source }} <span class="badge text-light" style="background: #000">{{ rating.Value }}</span></li>
                    </ul>
                    <ul style="width: 100%" class="list-group mt-3 rounded-0">
                        <li class="list-group-item text-light" style="background: #000">DVD</li>
                        <li class="list-group-item">{{ getMovie.DVD }}</li>
                    </ul>
                    <ul style="width: 100%" class="list-group mt-3 rounded-0">
                        <li class="list-group-item text-light" style="background: #000">Box Office</li>
                        <li class="list-group-item">{{ getMovie.BoxOffice }}</li>
                    </ul>
                    <ul style="width: 100%" class="list-group mt-3 rounded-0">
                        <li class="list-group-item text-light" style="background: #000">Production</li>
                        <li class="list-group-item">{{ getMovie.Production }}</li>
                    </ul>
                </div>
            </div>
        </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
    data() {
        return {
            pageTitle: 'Movue',
        };
    },
    computed: {
        ...mapGetters(['getMovie', 'getFavoriteMovie']),
    },
    methods: {
        ...mapActions(['addNewFavoriteMovie', 'removeFavoriteMovie']),
    },
    created() {
        this.$store.dispatch('fetchMovie', this.$route.params.id);
    },
    watch: {
        getMovie() {
            document.title = `${this.getMovie.Title} - ${this.pageTitle}`;
        },
    },
    beforeRouteLeave(to, from, next) {
        this.$store.commit('updateLoadingStatus', false);
        this.$store.commit('clearMovie');
        next();
    },
};
</script>

<style>

</style>
