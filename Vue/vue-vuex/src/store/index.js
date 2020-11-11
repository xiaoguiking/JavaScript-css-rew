import Vue from "vue";
import Vuex from "vuex";

import counter1 from "./counter1";
import counter2 from "./counter2";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    counter1,
    counter2
  }
});
