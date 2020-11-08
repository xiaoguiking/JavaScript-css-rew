import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    curInx: 0
  },
  mutations: {
    setCurInx(state, index) {
      state.curInx = index;
    }
  },
  actions: {},
  modules: {}
});
