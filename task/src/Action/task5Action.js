import * as ActionTypes from './type';

export function red(){
    return function (dispatch){
        dispatch({
            type:'red'
        });
    }
}
export function green(){
    return function (dispatch){
        dispatch({
            type:'green'
        });
    }
}
export function grey(){
    return function (dispatch){
        dispatch({
            type:'grey'
        });
    }
}
export function purple(){
    return function (dispatch){
        dispatch({
            type:'purple'
        });
    }
}
export function lime(){
    return function (dispatch){
        dispatch({
            type:'lime'
        });
    }
}
export function white(){
    return function (dispatch){
        dispatch({
            type:'white'
        });
    }
}