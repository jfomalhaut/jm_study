import React, {useState} from 'react';

function Input () {
    const [name, setName] = useState('')
    const [age, setAge] = useState('')
    const [phone, setPhone] = useState('')

    const onChangeHandler1 = (ev) =>{
        // const value = ev.target.value;
        const { target: {value} } = ev;
        setName(value);
    }
    const onChangeHandler2 = (ev) =>{
        const value = ev.target.value;
        setAge(value);
    }
    const onChangeHandler3 = (ev) =>{
        const value = ev.target.value;
        setPhone(value);
    }

    return(
        <div>
            <h1>Input Component</h1>
            <input value={name} onChange={onChangeHandler1} placeholder="이름입력"/>
            <input value={age} onChange={onChangeHandler2} placeholder="전번입력"/>
            <input value={phone} onChange={onChangeHandler3} placeholder="폰번입력"/>
            <div><h1 style={{color:'red'}}>{name} {age} {phone}</h1></div>
        </div>
    );
}

export default Input;