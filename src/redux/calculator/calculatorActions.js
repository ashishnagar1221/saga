import { ADD_EVENT, DIVIDE_EVENT, MULTIPLY_EVENT, SUB_EVENT } from "./constants"

export const add = (num1,num2) => {
    console.log( num1,num2)
   return {
    type: ADD_EVENT,
    num1,
    num2
   }
} 

export const sub = (num1,num2) => {
    return {
     type: SUB_EVENT,
     num1,
     num2
    }
 } 

 export const multiply = (num1,num2) => {
    return {
     type: MULTIPLY_EVENT,
     num1,
     num2
    }
 } 

 export const divide = (num1,num2) => {
    return {
     type: DIVIDE_EVENT,
     num1,
     num2
    }
 } 
 

