import actionType from './actionTypes'

import {fetchMemoryData} from '../../services'

const getMemoryData = (isLoading,data) => {
    return {
        type:actionType.STAT_FETCH_BLOG_DATA,
        loading:isLoading,
        res:data
    }
}
const initMessage = '正在请求数据...,请您耐心等待😊';

export const memoryData = () => (dispatch) => {
    dispatch(getMemoryData(true,initMessage));
    return fetchMemoryData().then((res) => {
        console.log('res----',res);
        let data = res.data;
       if(data && res.status === 0) {
             dispatch(getMemoryData(false,data));
       } 
    }).catch((err) => {
        dispatch(getMemoryData(false,err));
    })
}
