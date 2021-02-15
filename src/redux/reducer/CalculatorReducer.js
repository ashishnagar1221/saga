import { ADD_EVENT, DIVIDE_EVENT, MULTIPLY_EVENT, SUB_EVENT } from "../calculator/constants"

const initialState = {
    num1: 0,
    num2: 0,
    result: 0
}

export const CalculatorReducer = (state = initialState, action) => {
    console.log(action)
    switch (action.type) {
        case ADD_EVENT: return {
            num1: action.num1,
            num2: action.num2,
            result: parseInt(action.num1) + parseInt(action.num2)
        };
        case SUB_EVENT: return {
            num1: action.num1,
            num2: action.num2,
            result: action.num1 - action.num2
        };
        case MULTIPLY_EVENT: return {
            num1: action.num1,
            num2: action.num2,
            result: action.num1 * action.num2
        };
        case DIVIDE_EVENT: return {
            num1: action.num1,
            num2: action.num2,
            result: action.num1 / action.num2
        };

        default: return state
    }
}
