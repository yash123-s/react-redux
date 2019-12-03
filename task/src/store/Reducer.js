const initialState = {
    age:21
}

const Reducer =(state=initialState,action)=>{
    const newS={...state}
    if(action.type==='A_U'){
        newS.age=newS.age+action.value;
        if(newS.age==31){
            newS.age=newS.age-action.value;
            return newS;
        }
    }
  
    if(action.type==='A_D'){
        newS.age=newS.age-action.value;
        if(newS.age==14){
            newS.age=newS.age+action.value;
            return newS;
        }
    }
    return newS;
};

export default Reducer;