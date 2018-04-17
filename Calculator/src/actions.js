export const ADD_DIGIT = 'ADD_DIGIT'
export const addDigit = (digit) => ({type: ADD_DIGIT, payload: digit})

export const ADD_OPERATION = 'ADD_OPERATION'
export const addOperation = (operator) => ({type: ADD_OPERATION, payload: operator})