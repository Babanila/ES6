import React from 'react';
import { connect } from 'react-redux';
import ReactDOM from 'react-dom';

function DisplayScreen(expression){
    return (expression)
}


@connect(DisplayScreen)
export default class Display extends React.Component {
    render(){
        console.log(this.props.expression)
        return <div>
            <input className="display" type='text' value={this.props.expression} disabled='true' />
        </div>
    }
}