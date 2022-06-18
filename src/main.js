import Vue from "vue";
import Vuelidate from "vuelidate";
import Paginate from "vuejs-paginate";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import dateFilter from "./filters/data.filter";
import localizeFilter from "./filters/locaize.filter";
import currencyFilter from "./filters/currency.filter";
import tooltipDirective from "./directives/tooltip.directive";
import store from "./store";
import Loader from "./components/app/Loader";
import maessagePlugin from "./utils/message.plagin";
import "materialize-css/dist/js/materialize.min.js";

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

Vue.config.productionTip = false;

Vue.use(Vuelidate);
Vue.use(maessagePlugin);
Vue.filter("date", dateFilter);
Vue.filter("currency", currencyFilter);
Vue.filter("localize", localizeFilter);
Vue.directive("tooltip", tooltipDirective);
Vue.component("Loader", Loader);
Vue.component("Paginate", Paginate);

firebase.initializeApp({
  apiKey: "AIzaSyBUnToFsLIiLg9AChnHbtk-IFyUSr-mFAQ",
  authDomain: "crm-vue-6b407.firebaseapp.com",
  projectId: "crm-vue-6b407",
  storageBucket: "crm-vue-6b407.appspot.com",
  messagingSenderId: "5166825031",
  appId: "1:5166825031:web:076aa41d8a3fa31021fb62",
  measurementId: "G-0YGP8TGN79",
});

let app;

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: (h) => h(App),
    }).$mount("#app");
  }
});
