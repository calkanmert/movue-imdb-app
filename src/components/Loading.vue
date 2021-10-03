<template>
    <div v-if="getLoadingStatus" class="d-flex align-items-center justify-content-center mt-5">
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="margin:auto;/* background:#fff; */display:block;" width="144px" height="144px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
            <circle cx="50" cy="50" fill="none" stroke="#000000" stroke-width="4" r="17" stroke-dasharray="80.11061266653974 28.703537555513243">
                <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="1s" values="0 50 50;360 50 50" keyTimes="0;1"></animateTransform>
            </circle>
        </svg>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    computed: {
        ...mapGetters(['getLoadingStatus']),
    },
};
</script>
