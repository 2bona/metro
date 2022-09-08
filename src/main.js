import Vue from 'vue'
import axios from 'axios'
import App from './App.vue'
import store from './store'
import router from './router'
import vuetify from './plugins/vuetify'
import VueSocialSharing from 'vue-social-sharing'

Vue.use(VueSocialSharing);
Vue.config.productionTip = false

document.cookie = "cross-site-cookie=image; SameSite=None; Secure";
axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
axios.defaults.headers.common["Access-Control-Allow-Origin"] = "*";
axios.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded";
axios.defaults.headers.post["Accept"] = "application/json";
axios.defaults.headers.post["Credentials"] = true;
axios.defaults.baseURL = "https://e-dey-test-server.herokuapp.com/api";
Vue.use(axios);
new Vue({
  store,
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
