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