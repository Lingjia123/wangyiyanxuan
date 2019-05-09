
import {Reqfenlei} from '../../api'

import {RECEIVE_CATEGORYS} from '../mutation-types'

const state={
  categorys:[], //分类数据
  index:0,

}

const mutations={

  [RECEIVE_CATEGORYS](state,categorys){
    state.categorys = categorys
  },
}

const actions={
  async getFeileiData({commit}){
    const result = await Reqfenlei()
    if(result.code ===0){
      commit(RECEIVE_CATEGORYS,result.data.categoryL1List)

    }
  }
}

const getters={

}

export default {
  state,
  mutations,
  actions,
  getters
}
