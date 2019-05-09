import Mock from 'mockjs'
import homeData from './homeData.json'
import category from './category.json'

// console.log('mockServer')
// 指定监听的url和对应的json数据模板
Mock.mock('/shouye', {
  code: 0,
  data: homeData
})
Mock.mock('/fenlei', {
  code: 0,
  data: category
})
console.log('mock_server')
