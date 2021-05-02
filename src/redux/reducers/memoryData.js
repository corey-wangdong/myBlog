import actionType from '../actions/actionTypes'

const memoryData =  (state = [], action) => {
    switch(action.type) {
        case actionType.STAT_FETCH_MEMORY_DATA:
            return {
                data:action.data,
                isLoading:action.loading
            }
        case actionType.FETCH_MEMORY_DATA_SUCCESS:
            return {
                data:action.data,
                isLoading:action.loading
            }
        case actionType.FETCH_MEMORY_DATA_FAILED:
            return {
                data:[],
                isLoading:action.loading,
                errMsg:'呀，不好意思...网页走丢了😭'
            }
        default:
            return state;
    }
}
export default memoryData;