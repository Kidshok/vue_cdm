/* eslint-disable no-unused-vars */
import firebase from "firebase/compat/app";
import database from "firebase/compat/database";

export default {
  actions: {
    async createCategory({ commit, dispatch }, { title, limit }) {
      try {
        const uid = await dispatch("getUid");
        const category = await firebase
          .database()
          .ref(`/users/${uid}/categories`)
          .push({ title, limit });
        return { title, limit, uid: category.key };
      } catch (e) {
        commit("setError", e);
        throw e;
      }
    },
  },
};
