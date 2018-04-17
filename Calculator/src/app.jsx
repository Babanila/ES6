
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
