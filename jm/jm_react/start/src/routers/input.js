import React, { useState } from 'react';

function Input(){
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [phone, setPhone] = useState('');

    const onChangeHandlerName= (ev) =>{
        // const value = ev.target.value;
        const { target: { value } } =ev;
        setName(value);
        console.log(value)
    }
    const onChangeHandlerAge= (ev) =>{
        // const value = ev.target.value;
        const { target: { value } } =ev;
        setAge(value);
        console.log(value)
    }
    const onChangeHandlerPhone= (ev) =>{
        // const value = ev.target.value;
        const { target: { value } } =ev;
        setPhone(value);
        console.log(value)
    }
    return(
        <div>
         <h1>Input Component</h1>
         <div>
         <input value={name} onChange={onChangeHandlerName} placeholder="이름" />
         </div>
         
         <input value={age} onChange={onChangeHandlerAge} placeholder="값을 입력하시오" />
         <br/> 
         <input value={phone} onChange={onChangeHandlerPhone} placeholder="값을 입력하시오" />   
         <h1>{name} {age} {phone}</h1>
        </div>
    );
}

export default Input;