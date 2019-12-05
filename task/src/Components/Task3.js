import React, { Component } from 'react';
import {connect} from 'react-redux';
import {update_A,update_B,update_C,update_D} from '../Action/task3Action';
import  './Task3.css';

class Task3 extends Component {
    render() {
        return (
            <div>
            <div className='abc'>
                <div>{this.props.a}</div>
                <div>{this.props.b}</div>
               <div>{this.props.c}</div> 
                <div>{this.props.d}</div>
            
            
                <button onClick={()=>this.props.update_A(this.props.c)}>update A</button>
                <button onClick={()=>this.props.update_B(this.props.d)}>update B</button>
                <button onClick={()=>this.props.update_C(this.props.a)}>update C</button>
                <button onClick={()=>this.props.update_D(this.props.b)}>update D</button>
                </div>
            </div>
        );
    }
}

const mapStoreToProps=(state)=>
{
    const {a}=state.task2ReducerA;
    const {b}=state.task2ReducerB;
    const {c}=state.task2ReducerC;
    const {d}=state.task2ReducerD;
   
    
    return {a,b,c,d};
}

export default connect(mapStoreToProps,{update_A,update_B,update_C,update_D}) (Task3);