import actionType from '../actions/actionTypes'

const initData =  (state = [], action) => {
    switch(action.type) {
        case actionType.STAT_FETCH_BLOG_DATA:
            return {
                data:action.data,
                isLoading:action.loading
            }
        case actionType.FETCH_BLOG_DATA_SUCCESS:
            return {
                data:action.data,
                isLoading:action.loading
            }
        case actionType.FETCH_BLOG_DATA_FAILED:
            return {
                data:[],
                isLoading:action.loading,
                errMsg:'呀，不好意思...网页走丢了😭'
            }
        default:
            return state;
    }
}
export default initData;