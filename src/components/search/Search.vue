<template>
    <div class="container">
        <div class="row">
            <div class="col-md-12 d-flex justify-content-center">
                <form>
                    <div class="bg-white mt-5 rounded shadow-sm d-flex justify-content-between p-3 align-items-center" style="width: 700px; height: 60px;">
                        <input type="text" v-model="movie" class="form-control" style="width: 100%" placeholder="Enter Movie or series">
                        <button @click.prevent="search" class="btn text-light" style="margin-left: 15px;background: #000">Search</button>
                    </div>
                </form>
            </div>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    data() {
        return {
            movie: this.$route.params.searchedMovie ? this.$route.params.searchedMovie : '',
        };
    },
    methods: {
        search() {
            this.$router.push({ name: 'search', params: { searchedMovie: this.movie } });
        },
    },
    computed: {

    },
};
</script>
