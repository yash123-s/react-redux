import * as ActionTypes from '../Action/type3';

const initialState={
    d:2
};
export default (state = initialState, action)=>{
    switch(action.type){
        case ActionTypes.U_DD:{
           return {...state,d:state.d+action.value}
       }
       default:
           return state;
    }
}