<template>
    <div>
        <inc-header></inc-header>
        <router-view></router-view>
        <loading></loading>
    </div>
</template>

<script>
import Header from './components/includes/Header.vue';
import Loading from './components/Loading.vue';

export default {
    components: {
        incHeader: Header,
        loading: Loading,
    },
    created() {
        this.$store.dispatch('favoriteInit');
    },
};
</script>
