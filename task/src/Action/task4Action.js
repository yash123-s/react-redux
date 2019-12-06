import * as ActionTypes from './type4';

export function add(){
    return function (dispatch){
        dispatch({
            type:'ADD',value:1
        });
    }
}
export function sub(){
    return function (dispatch){
        dispatch({
            type:'SUB',value:1
        });
    }
}
export function increment(){
    return function (dispatch){
        dispatch({
            type:'INCREMENT',value:1
        });
    }
}