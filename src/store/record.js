/* eslint-disable no-unused-vars */
import firebase from "firebase/compat/app";
import database from "firebase/compat/database";

export default {
  actions: {
    async createRecord({ dispatch, commit }, record) {
      try {
        const uid = await dispatch("getUid");
        return await firebase
          .database()
          .ref(`/users/${uid}/records`)
          .push(record);
      } catch (e) {
        commit("setError", e);
        throw e;
      }
    },
  },
};
