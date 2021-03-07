import actionType from './actionTypes'

import {fetchInitData} from '../../services'

const startFetchBlogData = () => {
    return {
        type:actionType.STAT_FETCH_BLOG_DATA
    }
}

const fetchBlogDataSuccess = () => {
    return {
        type:actionType.FETCH_BLOG_DATA_SUCCESS
    }
}

const fetchBlogDataFailed = () => {
    return {
        type:actionType.FETCH_BLOG_DATA_FAILED
    }
}

export const fetchBlogData = () => (dispatch) => {
    console.log('++++++++++++++++++++++');
    dispatch(startFetchBlogData());
    fetchInitData().then((res) => {
        console.log('res++++',res);
        dispatch(fetchBlogDataSuccess());
    }).catch((err) => {
        console.log('err++++',err);
        dispatch(fetchBlogDataFailed());
    })
}
