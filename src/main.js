import Vue from "vue";
import Vuelidate from "vuelidate";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import dateFilter from "./filters/data.filter";
import store from "./store";
import maessagePlugin from "./utils/message.plagin";
import "materialize-css/dist/js/materialize.min.js";

Vue.config.productionTip = false;

Vue.use(Vuelidate);
Vue.use(maessagePlugin);
Vue.filter("date", dateFilter);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
