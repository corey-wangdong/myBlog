
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
            console.log('response----',response)
            resolve(response.data)
        }).catch(error => {
            console.log('error----',error);
            reject()
        })
    })
}

export default ajax;