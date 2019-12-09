import * as ActionTypes from '../Action/type4';


const initialState={
    a:1
};
export default (state=initialState, action ) => {
    switch (action.type) {
        case ActionTypes.add: {
            return {...state, a:state.a+action.value};
        }
        case ActionTypes.sub: {
            return {...state, a:state.a-action.value};
        }
        case ActionTypes.increment: {
            if(state.a%2==0){
            return {...state, a:state.a+action.value};
        }
    }        
        default :{
            return state ;
        }
    }
}