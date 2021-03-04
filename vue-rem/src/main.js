import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";2
import './api/http.js'
// import vConsole from './api/vconsole.js'
import './style/reset.scss';
import 'amfe-flexible'
import fastClick from 'fastclick'

fastClick.prototype.focus = function (targetElement) { //解决FastClick在ios输入框聚焦慢
  let length;
  if (targetElement.setSelectionRange && targetElement.type.indexOf('date') !== 0 && targetElement.type !== 'time' && targetElement.type !== 'month') {
    length = targetElement.value.length;
    targetElement.focus();
    targetElement.setSelectionRange(length, length);
  } else {
    targetElement.focus();
  }
}
fastClick.attach(document.body)

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
