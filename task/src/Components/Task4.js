import React, { Component } from 'react';
import {connect} from 'react-redux';
import {add,sub,increment} from '../Action/task4Action'

class Task4 extends Component {
    render() {
        return (
            <div>
                <div><h1>Number :</h1></div>
                <div><h1>{this.props.a}</h1></div>
                <button onClick={this.props.add}>+</button>
                <button onClick={this.props.sub}>-</button>
                <button onClick={this.props.increment}>If even number,increment</button>
            </div>
        );
    }
}

const mapStoreToProps=(state)=>{
    const {a}=state.task4Reducer;
    return{a};
}
export default connect((mapStoreToProps),{add,sub,increment})(Task4);