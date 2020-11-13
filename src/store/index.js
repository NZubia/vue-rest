import Vue from 'vue'
import Vuex from 'vuex'

import appFlow from '@/store/modules/appFlow';
import Dishes from "@/store/modules/dishes.store";
import Tables from "@/store/modules/tables.store";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    appFlow: appFlow,
    dishes: Dishes,
    tables: Tables
  }
})
