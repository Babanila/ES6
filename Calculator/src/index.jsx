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

