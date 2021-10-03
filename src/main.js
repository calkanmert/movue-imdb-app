import Vue from 'vue';
import VueResource from 'vue-resource';
import App from './App.vue';
import router from './routes/router';
import store from './store/store';

Vue.use(VueResource);

Vue.filter('capitalize', (value) => {
    const changedValue = value.toString();
    return changedValue.charAt(0).toUpperCase() + changedValue.slice(1);
});

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount('#app');
