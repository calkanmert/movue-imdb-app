import Search from '../components/search/Search.vue';
import Movies from '../components/search/Movies.vue';
import Movie from '../components/Movie.vue';
import MyFavorites from '../components/MyFavorites.vue';

export default [
    {
        path: '/',
        component: Search,
        children: [
            {
                path: '/search/:searchedMovie',
                component: Movies,
                name: 'search',
            },
        ],
    },
    {
        path: '/movie/:id',
        component: Movie,
        name: 'movie',
    },
    {
        path: '/my-favorites',
        component: MyFavorites,
        name: 'myFavorites',
    },
    {
        path: '/*',
        redirect: '/',
    },
];
