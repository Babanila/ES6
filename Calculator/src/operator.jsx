import React from 'react'
import { connect } from 'react-redux';
import { addOperation } from "./actions";


@connect()
export default class Operator extends React.Component {
    constructor(props) {
        super(props);
        this.handleClicked = (operator) => () => this.props.dispatch(addOperation(operator))
    }
    render() {
    const buttonOperators = ["+", "-", "/", "*", "=", "C"].map((operator) => {
        return (
            <button className="OStyle" key={operator} onClick={this.handleClicked(operator)}>{operator}</button>)})


    return <div>
            {buttonOperators}
        </div>
    }
}
