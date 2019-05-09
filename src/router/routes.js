import Shouye from '../pages/shouye/shouye'
import Fenlei from '../pages/fenlei/fenlei'
import Gouwuche from '../pages/gouwuche/gouwuche'
import Shiwu from '../pages/shiwu/shiwu'
import Geren from '../pages/geren/geren'
import RightList from '../pages/fenlei/components/RightList'

export default [
  {
    path:'/shouye',
    component:Shouye,
    meta: {
      isShowFooter: true
    }
  },
  {
    path:'/fenlei',
    component:Fenlei,
    children:[
      {
        path:'/fenlei/rightlist',
        name:'rightlist',
        component:RightList,
      }
    ],
    meta: {
      isShowFooter: true
    }
  },
  {
    path:'/gouwuche',
    component:Gouwuche,
    meta: {
      isShowFooter: true
    }
  },
  {
    path:'/shiwu',
    component:Shiwu,
    meta: {
      isShowFooter: true
    }
  },
  {
    path:'/geren',
    component:Geren
  },
  {  path:'/',
    redirect:'/shouye'
  }
]
