import Vue from 'vue'
import Vuex from 'vuex'

import actions from './actions'
import getters from './getters'
import shouye from './modules/shouye'
import categorys from './modules/categorys'

Vue.use(Vuex)

export default new Vuex.Store({
  actions,
  getters,
  modules:{
    shouye,
    categorys
  }
})
