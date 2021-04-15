import React, { useState, useEffect } from 'react';

function Counter(){
    const [count, setCount]=useState(0);

    const increasement = () => {
        setCount(count + 1);
    };

    const decreasement = () => {
        setCount(count - 1);
    }

    const change = (flag) => {
        if(flag){
            setCount(count + 1);
        }else{
            setCount(count -1);
        }
    };

    useEffect(()=>{
        console.log(count);
        if(count===10){
            alert('10입니다')
        }
    },[count])


    return(
        <div>
            <h1>Counter: {count}</h1>
            <button onClick={increasement}>증가</button>
            <button onClick={()=>decreasement()}>감소</button>
            <button onClick={()=>change(true)}>Plus</button>
            <button onClick={()=>change(false)}>Minus</button>
        </div>
    );
}

export default Counter;