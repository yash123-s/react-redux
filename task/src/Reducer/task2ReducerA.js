import * as ActionTypes from '../Action/type3';


const initialState={
    a:1
};
export default (state = initialState, action)=>{
     switch(action.type){
         case ActionTypes.U_AA:{
             return {...state,a:state.a+action.value}
         }
        default:
            return state;
     }
}