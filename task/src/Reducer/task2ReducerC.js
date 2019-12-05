import * as ActionTypes from '../Action/type3';

const initialState={
    c:1
};
export default (state = initialState, action)=>{
    switch(action.type){
        case ActionTypes.U_CC:{
           return {...state,c:state.c+action.value}
       }
       default:
           return state;
    }
}