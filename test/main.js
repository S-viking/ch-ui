import Vue from "vue";
import App from "./App.vue";
// 导入组件库
import ChUI from "../packages";
Vue.config.productionTip = false;
Vue.use(ChUI);

new Vue({
  render: (h) => h(App),
}).$mount("#app");
