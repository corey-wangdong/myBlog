import ajax from './ajax'

// 定义请求接口

// 基础路径
// const BASEURL = '';

// 1. 台式机路径
// let BASEURL = 'http://192.168.0.100:5000';

// 2. 笔记本路径
let BASEURL = 'http://127.0.0.01:5000';

// 1.请求登陆接口.
export const reqLogin = (username,password) => {
    return ajax(BASEURL + '/login',{username,password},'GET')
}

// 2.添加新用户接口
