import {combineReducers} from 'redux';

import initData from './initData';
import memoryData from './memoryData';

export default combineReducers({
    initData,
    memoryData
})