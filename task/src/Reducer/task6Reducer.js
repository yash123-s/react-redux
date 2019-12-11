
const initialState={
    FirstValue:'',
    SecondValue:'',
    operator:'',
    Equator:'',
    msg:''
}

export default(state = initialState,action)=>{
    debugger
    switch(action.type){
        case "SEND":{
        return{...state,[action.payload.name]:action.payload.value}
    }
    case "CHECK":{
        switch(state.operator){
            case '+':
                if(parseInt(state.FirstValue)+ parseInt(state.SecondValue)==state.Equator)
                return{...state,msg:"correct"}
                else
                    return{...state,msg:"incorrect"}
                
                case '-':
                if((state.FirstValue)-(state.SecondValue)==state.Equator)
                return{...state,msg:"correct"}
                else
                    return{...state,msg:"incorrect"}
                
                case '*':
                if((state.FirstValue)*(state.SecondValue)==state.Equator)
                return{...state,msg:"correct"}
                else
                    return{...state,msg:"incorrect"}
                
                case '/':
                if((state.FirstValue)/(state.SecondValue)==state.Equator)
                return{...state,msg:"correct"}
                else
                    return{...state,msg:"incorrect"}
                default: return{...state,msg:'enter the operator'}
        }
    }
    default:
        return state;
    }
}
