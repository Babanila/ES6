import React from 'react';
import { connect } from 'react-redux';
import { addDigit } from './actions';


@connect()
export class Digit extends React.Component {
    constructor(props) {
        super(props);
        this.handleClicked = (digit) => () => this.props.dispatch(addDigit(digit))
    }

    render() {
            const buttonNumbers = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0, "."].map((number) => {
                return <button className="DStyle"  key={number} onClick={this.handleClicked(number)}>{number}</button>
            });

            return <div>
                {buttonNumbers}
            </div>
        }
    }