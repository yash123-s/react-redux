import { combineReducers } from 'redux';
import task2ReducerA from './task2ReducerA';
import task2ReducerB from './task2ReducerB';
import task2ReducerC from './task2ReducerC';
import task2ReducerD from './task2ReducerD';

export default combineReducers({
    task2ReducerA,
    task2ReducerB,
    task2ReducerC,
    task2ReducerD
})