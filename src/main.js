// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";

// import Fruits from "./components/fruit.vue";

Vue.config.productionTip = false;

// global vue web component
// Vue.component("fruits", Fruits);

/* eslint-disable no-new */
new Vue({
  el: "#app",
  components: { App },
  template: "<App/>"
});
