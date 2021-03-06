import Vue from "vue";
import Vuex from "vuex";

import getters from "./getters";
import common from "./modules/common";
import user from "./modules/user";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  getters,
  mutations: {},
  actions: {},
  modules: {
    common,
    user,
  },
});
