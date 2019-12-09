import * as ActionTypes from '../Action/type';

// const initialState={
//     backgroundcolor:{ backgroundColor: 'white' }
// };

// export default (state=initialState, action ) => {
//     switch (action.type) {
//         case ActionTypes.BLACK: {
//             return {...state,backgroundcolor:{ ...state,backgroundcolor: 'black' }};
//         }      
//         default :{
//             return state ;
//         }
//     }
// }
    // const Reducer =(state=initialState,action)=>{
    //     const newS={...state}
    //     if(action.type==='BLACK'){
    //         newS.backgroundcolor={backgroundColor:'black'}
    //             return newS;
    //         }
    //     }

    const initialState={
        backgroundgcolor:''
        } 
        
        export default (state=initialState,action)=>{
            debugger
        switch (action.type)
        {
        case ActionTypes.red: {
        return{...state,backgroundcolor:'red'}
        }
        case ActionTypes.green: {
        return{...state,backgroundcolor:'green'}
        }
        case ActionTypes.grey: {
        return{...state,backgroundcolor:'grey'}
        }
        case ActionTypes.purple: {
        return{...state,backgroundcolor:'purple'}
        }
        case ActionTypes.lime: {
        return{...state,backgroundcolor:'lime'}
        }
        case ActionTypes.white: {
            return{...state,backgroundcolor:'white'}
            }
        default:return state;
    }
}