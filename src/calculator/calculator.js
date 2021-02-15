import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { ADD_EVENT, SUB_EVENT, MULTIPLY_EVENT, DIVIDE_EVENT } from "../redux/calculator/calculatorActions";
import { add, divide, multiply, sub } from "../redux/calculator/calculatorActions";

function Calculator(props) {
    const [num1, setNum1] = useState(null);
    const [num2, setNum2] = useState(null);

    const dispatch = useDispatch();
    const result = useSelector(state => state.CalculatorReducer)
    console.log(result)

    const addHandler = () => {
        dispatch(add( num1, num2))
    }

    const subHandler = () => {
        dispatch(sub( num1, num2 ))
    }

    const mulHandler = () => {
        dispatch(multiply( num1, num2 ))
    }

    const divideHandler = () => {
        dispatch(divide(num1, num2 ))
    }

    return (
        <div className='mx-auto'>
            <h2 className='pt-5'>Calculator</h2>
            <div>
                <input
                    type='number'
                    value={num1}
                    onChange={(e) => setNum1(e.target.value)}
                />

                <input
                    type='number'
                    onChange={(e) => setNum2(e.target.value)}
                    value={num2} />

                <input
                    type='number'
                       value = {result.result}
                    disabled />

                <button
                    type='submit'
                    onClick={() => addHandler()}>
                    ADD
                         </button>
                <button
                    type='submit'
                    onClick={() => subHandler()}>
                    SUB
                         </button>
                <button
                    type='submit'
                    onClick={() => mulHandler()}>
                    MULTIPLY
                         </button>
                <button
                    type='submit'
                    onClick={() => divideHandler()}>
                    DIVIDE
                         </button>
            </div>
        </div>
    );
}

export default Calculator;