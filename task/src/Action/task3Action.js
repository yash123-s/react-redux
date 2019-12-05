import * as ActionTypes from './type3';

export function update_A(c){
    return function (dispatch){
        dispatch({
            type:'U_A',value:c
        });
    }
}

export function update_B(d){
    return function (dispatch){
        dispatch({
            type:'U_B',value:d
        });
    }
}
export function update_C(a){
    return function (dispatch){
        dispatch({
            type:'U_C',value:a
        });
    }
}

export function update_D(d){
    return function (dispatch){
        dispatch({
            type:'U_D',value:d
        });
    }
}