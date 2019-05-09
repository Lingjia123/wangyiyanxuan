/*
定义n个接口请求函数模块
调用ajax 函数发请求
*/

import ajax from './ajax'
// 区分开发环境和生产环境
const prefix = '/api';

//1,获取首页数据
export const Reqshouye =()=>ajax('/shouye')
//2,获取分类数据
export const Reqfenlei =()=>ajax('/fenlei')
