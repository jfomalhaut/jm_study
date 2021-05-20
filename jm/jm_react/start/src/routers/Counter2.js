import React from 'react'
import { useEffect, useState, useReducer } from 'react'

const CountReducer = (state, action) => {
    switch(action.type) {
        case 'INCREAMENT': {
            return state+action.custom;
        }
        default: {
            return state;
        }
    }
};

function Counter2(){
    const [ count, dispatch ] = useReducer(CountReducer, 0);//0->state

    const increament = () => {
        dispatch({ type: 'INCREAMENT', custom:10 })
    };

    return(
        <div>
            <h1>Count: {count}</h1>
            <button onClick={increament}>증가</button>
        </div>
    )
}
export default Counter2;


//숙제
//1)감소, 2)input창에 입력한 값을 더해서 출력하기
