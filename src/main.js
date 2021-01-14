/*
 * @Author: your name
 * @Date: 2020-09-26 18:37:43
 * @LastEditTime: 2021-01-09 16:57:11
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \h5_1\src\main.js
 */
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "@/icons";
import "./utils/rem.js";
import "@/scss/main.scss";
import md5 from "@/utils/md5"; // 加密
import VueLazyload from "vue-lazyload"; // 图片懒加载
import "vant/lib/index.css";
import "@/utils/permission.js"

// Vue.use(VueLazyload)
// or with options
Vue.use(VueLazyload, {
  preLoad: 1.2, // 预载入高度比例
  error: require("./assets/error.jpg"), // 加载失败时显示的图片
  loading: require("./assets/loading3.gif"), // 加载loading
  attempt: 1,
});

Vue.config.productionTip = false;
Vue.prototype.$md5 = md5; // 加密

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
