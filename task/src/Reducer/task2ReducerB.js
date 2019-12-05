import * as ActionTypes from '../Action/type3';

const initialState={
    b:2
};
export default (state = initialState, action)=>{
    switch(action.type){
        case ActionTypes.U_BB:{
           return {...state,b:state.b+action.value}
       }
       default:
           return state;
    }
}