import React , {useReducer} from 'react';

const CountReducer = (state, action) => {
    switch(action.type){
        case 'INCREMENT' : {
            return state + action.custom
        }
        default : {
           return state}
    }
};

function Counter2 (){
    const [count, dispatch] = useReducer(CountReducer, 0)

    const increment = () =>{
        dispatch({type: 'INCREMENT', custom:10 });
    };

    return (
        <div>
            <h1>Count:{count}</h1>
            <button onClick={increment}>증가</button>
        </div>
    )
}
export default Counter2