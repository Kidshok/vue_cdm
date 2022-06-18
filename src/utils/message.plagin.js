import M from "materialize-css";
import localizeFilter from "../filters/locaize.filter";
/* eslint-disable no-unused-vars */
export default {
  install(Vue, options) {
    Vue.prototype.$message = function (html) {
      M.toast({ html });
    };

    Vue.prototype.$error = function (html) {
      M.toast({ html: `[${localizeFilter("Error")}]: ${html}` });
    };
  },
};
