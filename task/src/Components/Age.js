import React, { Component } from 'react';
import {connect} from 'react-redux';

class Age extends Component {
    render() {
        return (
            <div>
                <div>{this.props.age}</div>
                <button onClick={this.props.onAgeUp}>Up</button>
                <button onClick={this.props.onAgeDown}>Down</button>
            </div>
        );
    }
}


const mapDispachToProps=(dispatch)=>{
    return{
        onAgeUp:()=>dispatch({type:"A_U",value:1}),
        onAgeDown:()=>dispatch({type:"A_D",value:1})
    };
};

const mapStateToProps=(state)=>{
    return{
        age: state.age
    };
};

export default connect(mapStateToProps,mapDispachToProps)(Age);
