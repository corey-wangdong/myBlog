import actionType from './actionTypes'

import {fetchInitData} from '../../services'

const startFetchBlogData = () => {
    return {
        type:actionType.STAT_FETCH_BLOG_DATA,
        loading:true,
        res:'亲，页面正在加载中，请耐心等候...'
    }
}

const fetchBlogDataSuccess = (data) => {
    return {
        type:actionType.FETCH_BLOG_DATA_SUCCESS,
        data,
        loading:false
    }
}

const fetchBlogDataFailed = (err) => {
    return {
        type:actionType.FETCH_BLOG_DATA_FAILED,
        data:err,
        loading:false
    }
}

export const fetchBlogData = () => (dispatch) => {
    dispatch(startFetchBlogData());
    return fetchInitData().then((res) => {
        let data = res.data;
       if(data && res.status === 0) {
             dispatch(fetchBlogDataSuccess(data));
       } 
    }).catch((err) => {
        dispatch(fetchBlogDataFailed(err));
    })
}
