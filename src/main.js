import Vue from 'vue';
import App from './App.vue';
import router from './router';
import * as VueGoogleMaps from 'vue2-google-maps';
import './assets/index.css';
import axios from 'axios'
import VueAxios from 'vue-axios'
import store from "./store";
Vue.config.productionTip = false;
Vue.use(VueAxios, axios)

Vue.use(VueGoogleMaps, {
	load: {
		key: 'AIzaSyCvKz1-nAOmVRNvmbEECgwkSHSRyYucVuU',
		libraries: 'places',
	},
	installComponents: true,
});

new Vue({
	store,
	router,
	render: (h) => h(App),
}).$mount('#app');
