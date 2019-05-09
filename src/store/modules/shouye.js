
import {Reqshouye} from '../../api'

import {RECEIVE_NAVLIST} from '../mutation-types'

const state={
navList:[]  //导航列表
}

const mutations={

[RECEIVE_NAVLIST](state,navList){
  state.navList = navList
}
}

const actions={
 async getShouyeData({commit}){
    const result = await Reqshouye()
   if(result.code ===0){
     commit(RECEIVE_NAVLIST,result.data.kingKongModule.kingKongList)
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
