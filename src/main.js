import Vue from 'vue'
import Buefy from 'buefy'
import App from './App.vue';
import router from './router';
import store from './store';
import 'buefy/dist/buefy.css'

Vue.config.productionTip = false;

new Vue({
  Buefy,
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
