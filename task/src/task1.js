const {createStore} = require ('redux');

const initialState ={
    age:"ys"
};


const myReducer = (state=initialState, action)=>{
    const newState ={...state};
    if(action.type === 'ADD'){
        newState.age+=action.payload;
    }
    if(action.type === 'SUB'){
        newState.age-=action.payload;
    }
    if(action.type === 'MUL'){
        newState.age*=action.payload;
    }
    return newState;
}

const store = createStore(myReducer);

store.subscribe(()=>{
    console.log('state changed', JSON.stringify(store.getState()));
})
console.log('initialState', JSON.stringify(store.getState()));
store.dispatch({type:"ADD", payload:"g"});
store.dispatch({type:"SUB", payload:10});
store.dispatch({type:"MUL", payload:10});
// store.dispatch({type:"ADD", payload:10});
// store.dispatch({type:"ADD", payload:10});
// store.dispatch({type:"ADD",payload:10});
