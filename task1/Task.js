const {createStore} = require ('redux');

const initialState ={
    age:40
};


const myReducer = (state=initialState, action)=>{
    const newState ={...state};
//     if(action.type === 'ADD'){
//         newState.age+=action.payload;
//     }
//     if(action.type === 'SUB'){
//         newState.age-=action.payload;
//     }
//     if(action.type === 'MUL'){
//         newState.age*=action.payload;
//     }
//     if(action.type === 'DIV'){
//         newState.age/=action.payload;
//     }
//     if(action.type === 'MOD'){
//         newState.age%=action.payload;
//     }
//     return newState;
// }
switch (action.type) {

    case "MOD":
        newState.age=action.payload%newState.age
    //   newState.age%=action.payload;
      return newState
      default:
          return newState
      }

//     case 'LOGOUT':
//       return {
//         authenticated: false
//       }

//     default:
//       return state;

//   }
    }

const store = createStore(myReducer);

store.subscribe(()=>{
    console.log('state changed', JSON.stringify(store.getState()));
})
console.log('initialState', JSON.stringify(store.getState()));
// store.dispatch({type:"ADD", payload:10});
// store.dispatch({type:"SUB", payload:0.2});
// store.dispatch({type:"MUL", payload:10});
// store.dispatch({type:"DIV", payload:20});
store.dispatch({type:"MOD", payload:200});