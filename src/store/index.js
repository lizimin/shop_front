import Vue from "vue";
import Vuex from "vuex";
import app from "./modules/app";
import vux from "./modules/vux";
import getters from "./getters";

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    app,
    vux,
  },
  getters
});

export default store;
