import React, { useState } from 'react';

function Input(){
    const [data, setData] = useState('');
    return(
        <div>
         <h1>Input Component</h1>
         <input value={data} placeholder="값을 입력하시오" />  
         <input />
        </div>
    );
}

export default Input;