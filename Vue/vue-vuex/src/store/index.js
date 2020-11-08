import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    curInx: 0,
    name: '蓝波',
    age: 34855,
  },
  // mutations: {
  //   setCurInx(state, index) {
  //     state.curInx = index;
  //   }
  // },
  mutations: {
    setCurInx(state, payload) {
      const { index, text } = payload;
      state.curInx = index;
      console.log(text);
    }
  },
  getters: {
    getMyInfo(state) {
      return `我的名字是${state.name}, 我的年龄是${state.age}`;
    }
  },
  actions: {},
  modules: {}
});
