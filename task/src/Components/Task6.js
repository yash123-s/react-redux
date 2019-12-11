import React, { Component } from 'react';
import './task6.css';
import { connect } from 'react-redux';
import {check,handleChange} from '../Action/task6Action'

class Task6 extends Component {
  render() {
  return (
      <div>
         <div className="form">
              <input name='FirstValue' type='number' placeholder='First Operand' onChange={this.props.handleChange}></input>
              <select name='operator' onChange={this.props.handleChange}>
                  <option>Operator</option>
                  <option> + </option>
                  <option> - </option>
                  <option> * </option>
                  <option> / </option>
              </select>
              <input onChange={this.props.handleChange} name="SecondValue" type="number" placeholder="Second Operand"></input>
              <h3>=</h3>
              <input onChange={this.props.handleChange} name="Equator" type="number" placeholder="Result"></input> 
               <button onClick={this.props.check}>checkit</button>
               </div>
          
              <h1> {this.props.FirstValue}</h1>
              <h1> {this.props.operator}</h1>
              <h1> {this.props.SecondValue}</h1>
              <h1> {this.props.Equator}</h1>
              <h1> {this.props.msg}</h1>
         
            </div>
        );
    }
}
const mapStateToProps=(state)=>{
  const {FirstValue,operator,SecondValue,Equator,msg}=state.task6Reducer;
  return{FirstValue,operator,SecondValue,Equator,msg};
}
// const mapDispatchToProps=(dispatch)=>{
//   return{
//       handleChange:(event)=>dispatch({type:"SEND", payload:event.target}),

//       check:()=>dispatch({type:"CHECK"})
//   };
// };

export default connect(mapStateToProps,{handleChange,check})(Task6);