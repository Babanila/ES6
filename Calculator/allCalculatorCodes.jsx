/*
// index.html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
        <title>Calculator</title>
</head>
<body>
<div id="main">Calculator loading... </div>
</body>
</html>
*/


// index.jsx
"use strict"
import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import React from 'react'
import { Component } from 'react'
import ReactDOM from 'react-dom'
import reducer from './reducer'
import App from './app'
import './calculatorStyle.css'

const store = createStore(
reducer, composeWithDevTools(applyMiddleware())
)


ReactDOM.render(
<Provider store={store}>
    <div>
        <App/>
    </div>
</Provider>,
document.getElementById('main')
)


// app.jsx
"use strict"
import React from 'react'
import { Component } from 'react'
import ReactDOM from 'react-dom'
import {Provider, connect} from 'react-redux'
import SafeEval from 'safe-eval'
import Display from './display'
import Operator from './operator'
import { Digit } from './digit'
import './calculatorStyle.css'


export default class App extends React.Component {
    render() {
        return (
            <div className="AD">
                <div className="h1"><h1> Calculator </h1></div>
                <Display />
                <Digit />
                <Operator />
            </div>
        );
    }
}


// display.jsx (Display Component)
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


// digit.jsx (Digit Component)
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


// operator.jsx (Operator Component)
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


// actions.js
export const ADD_DIGIT = 'ADD_DIGIT'
export const addDigit = (digit) => ({type: ADD_DIGIT, payload: digit})

export const ADD_OPERATION = 'ADD_OPERATION'
export const addOperation = (operator) => ({type: ADD_OPERATION, payload: operator})


// reducer.js
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import SafeEval from 'safe-eval'
import { ADD_DIGIT, ADD_OPERATION} from './actions'


const initialState = () => ({
    expression: '0',
    acc: null,
    pendingOperation: null
});

export default function reducer(state =  initialState(), {type, payload}) {
    switch(type) {

        case ADD_DIGIT: {
            const expression = state.expression === '0' ? payload.toString() : state.expression + payload.toString()
            return {...state, expression}
        }

        case ADD_OPERATION: {
            if (payload === '+' || payload === '-' || payload === '*' || payload === '/') {
                const expression = state.expression === '0' ? payload.toString() : state.expression + payload.toString()
                return {...state, expression}
            }

            else if(payload === 'C'){
                return {expression: state.expression.length <= 1 ? '0' : state.expression.slice(0, -1)}
            }

            else if(payload === 'AC'){
                return {expression: '0',
                    acc: null,
                    pendingOperation: null}
            }

            else {
                const result = state.expression === '0' ? '0' : SafeEval(state.expression)
                return {expression: result.toString()}
            }

        }

        default:
            return state
    }
}


/*
//style.css
.AD {
    margin: 5% 0 0 25%;
    background: black;
    width: 25em;
    heigth: 80em;
    border-radius: 1.5em;
    font-family: "Book Antiqua" , sans-serif, 'Franklin Gothic Medium', 'Arial Narrow', Arial;

}

.h1 {
    margin: 1em;
    margin-bottom: 0em;
    color: white;
    padding-bottom: 0em;
}

.display {
    margin-top: 0em;
    align: center;
    margin-bottom: 0.5em;
    margin-left: 0.3em;
    width: 95%;
    height: 2em;
    border-radius: 1.5em;
    border: 0.5em;
    background-color: white;
    text-align: right;
    font-size: 2em;
    color: red;
}

.DStyle {
    margin: 1em;
    width: 4em;
    height: 4em;
    border-radius: 1.5em;
    border: 1em;
    color: black;
    background-color: white;
    border-color: solid 3px red;
    font-size: 1em;
    font-weight: bold;
    font-family: Tahoma, sans-serif;
    padding: 0;
}

.OStyle {
    margin: 1em;
    width: 4em;
    height: 4em;
    border-radius: 1.5em;
    color: red;
    border-color: 3px red;
    background-color: white;
    font-size: 1em;
    font-weight: bolder;
    font-family: Tahoma, sans-serif;
}

.AD .DStyle:hover {
    background-color: yellow;
    color: red;
}

.AD .OStyle:hover {
    background-color: red;
    color: white;
}

*/