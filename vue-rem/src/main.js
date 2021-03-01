import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";2
import './api/http.js'
import './style/reset.scss';
import 'amfe-flexible'
import fastClick from 'fastclick'

fastClick.attach(document.body)

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
