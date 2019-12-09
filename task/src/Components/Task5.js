import React, { Component } from 'react';
import { connect } from 'react-redux';
import {red,green,grey,purple,lime,white} from '../Action/task5Action';
import './Task5.css';
class Task5 extends Component {
    render() {
        return (
            <div className={this.props.backgroundcolor}>
                <div><h1>COLOR TASK :</h1></div>
                <button onClick={this.props.red} onMouseOver={this.props.green} onDoubleClick={this.props.white}>red</button>
                <button onClick={this.props.green} onMouseOver={this.props.grey}  onDoubleClick={this.props.white}>green</button>
                <button onClick={this.props.grey} onMouseOver={this.props.purple} onDoubleClick={this.props.white}>gray</button>
                <button onClick={this.props.purple} onMouseOver={this.props.lime} onDoubleClick={this.props.white}>purple</button>
                <button onClick={this.props.lime} onMouseOver={this.props.red} onDoubleClick={this.props.white}>lime</button>
            </div>
        );
    }
}

const mapStateToProps=(state)=>{
    const {backgroundcolor}=state.task5Reducer;
    return{backgroundcolor};
}
export default connect((mapStateToProps),{red,green,grey,purple,lime,white})(Task5);