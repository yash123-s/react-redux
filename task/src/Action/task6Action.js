import * as ActionTypes from './type';

// const function mapDispatchToProps=(dispatch)=>{
//     return{
//         handleChange:(event)=>({dispatch:"SEND", payload:event.target}),
//         check:()=>dispatch({type:"CHECK"})
//     };
// };

// export default mapDispatchToProps;

export function handleChange(event){
        return function(dispatch)
         {
           dispatch({type:'SEND',payload:event.target});
         }
     }
     export function check(){
        return function(dispatch)
         {
           dispatch({type:'CHECK'});
         }
     }