import React, { Component } from 'react';
import {connect} from 'react-redux';
import {U_A,U_B} from '../Action/task2Action'

class Task2 extends Component {
    render() {
        return (
            <div>
                <span>A:{this.props.a}</span>
                <button onClick={()=>this.props.U_A(this.props.b)}>update A</button><br></br>
                <span>B:{this.props.b}</span>
                <button onClick={()=>this.props.U_B(this.props.a)}>update B</button> 
            </div>
                );
            }
        }
const mapStoreToProps=(state)=>
{
const {a}=state.task2ReducerA;
const {b}=state.task2ReducerB;
return { a,b};
}

export default connect(mapStoreToProps,{U_A,U_B})( Task2);