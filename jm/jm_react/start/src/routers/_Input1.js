import React, {useState} from 'react';

function _Input1(){
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [phone, setPhone] = useState('');

    const onChangeHandler = (ev) => {
        const value=ev.target.value;
        setName(value);
    } 
    const onChangeHandler2 = (ev) =>{
        const value=ev.target.value;
        setAge(value);
    }
    const onChangeHandler3 = (ev) =>{
        const {target:{value}}= ev
        setPhone(value);
    };

    return (
        <div>
        <h1>Input Component</h1>
        <div>
            <input value={name} onChange={onChangeHandler} placeholder="이름 값을 입력하세요"/>
        </div>
        <div>
            <input value={age} onChange={onChangeHandler2} placeholder="이름 값을 입력하세요"/>
        </div>
        <div>
            <input value={phone} onChange={onChangeHandler3} placeholder="이름 값을 입력하세요"/>
        </div>
        <h1 style={{color:'red'}}>{name} {age} {phone}</h1>
        </div>
    )
}
export default _Input1

