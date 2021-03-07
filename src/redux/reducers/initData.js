import actionType from '../actions/actionTypes'

import initState from '../../mock/initState.json'

export default (state = [], action) => {
    switch(action.type) {
        case actionType.STAT_FETCH_BLOG_DATA:
            return {
                ...state,
                isLoading:true
            }
        case actionType.FETCH_BLOG_DATA_SUCCESS:
            return {
                ...state,
                isLoading:false
            }
        case actionType.FETCH_BLOG_DATA_FAILED:
            return {
                ...state,
                isLoading:false,
                errMsg:'呀，不好意思...网页走丢了😭'
            }
        default:
            return state;
    }
}