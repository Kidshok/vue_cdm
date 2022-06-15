import Vue from "vue";
import Vuex from "vuex";
import auth from "./auth";
import info from "./info";
import category from "./category";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    error: null,
  },
  mutations: {
    setError(state, error) {
      state.error = error;
    },
    clearError(state) {
      state.error = null;
    },
  },
  actions: {
    async fetchCurrency() {
      const key = process.env.VUE_APP_FIXER;
      // const res = await fetch(
      //   `http://data.fixer.io/api/latest?access_key=${key}&symbols=USD,EUR,RUB`
      // );
      let myHeaders = new Headers();
      myHeaders.append("apikey", `${key}`);

      let requestOptions = {
        method: "GET",
        redirect: "follow",
        headers: myHeaders,
      };

      const res = await fetch(
        "https://api.apilayer.com/fixer/latest?symbols=USD%2CEUR%2CRUB&base=EUR",
        requestOptions
      );
      return await res.json();
    },
  },
  getters: {
    error: (s) => s.error,
  },
  modules: { auth, info, category },
});
