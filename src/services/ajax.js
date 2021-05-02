
import axios from 'axios';

const ajax = (url,data={},type='GET') => {
    return new Promise((resolve,reject) => {
        let promise = null;
        if(type === 'GET') {
            promise = axios.get(url,{
                params:data
            })
        }else if(type==='POST') {
            promise = axios.post(url,data)
        }

        promise.then(response => {
            resolve(response.data)
        }).catch(error => {
            reject('亲，数据请求失败了😭')
        })
    })
}

export default ajax;