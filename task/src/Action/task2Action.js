export function U_A(b){
    return function (dispatch){
        dispatch({
            type:'U_A',value:b
        });
    }
}

export function U_B(a){
    return function (dispatch){
        dispatch({
            type:'U_B',value:a
        });
    }
}