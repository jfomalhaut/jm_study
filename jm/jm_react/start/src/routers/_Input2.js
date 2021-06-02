import React, {useEffect, useState} from 'react';

const field = {
    name:'',
    age:'',
    phone:'',
}

function Input2(){
    const [info,setInfo] =useState(field);
    const [list, setList] = useState([]);
    const {name, age, phone} = info

    const onChangeHandler = (ev) =>{
        const {target:{value, name}}=ev;
        setInfo({
            ...info,
            [name]:value
        });
    }
useEffect(()=>{
    console.log(info)
},[info])

    const onSubmit = (ev) =>{
        ev.preventDefault();
        const {target:{value}}=ev;
        setList([
            ...list,
            info
        ])
    }

    return(
        <div>
            <h1>Input2 Component</h1>
            <form onSubmit={onSubmit}>
                <input name="name" value={name} onChange={onChangeHandler} />
                <input name="age" value={age} onChange={onChangeHandler} />
                <input name="phone" value={phone} onChange={onChangeHandler}/>
                <button>확인</button>
            </form>
            <ul>
                {list.map((item, index)=>(
                    <li key={`PHONE${index}`}>
                        <div>name:{item.name}</div>
                        <div>age:{item.age}</div>
                        <div>phone:{item.phone}</div>

                    </li>
                ))}
            </ul>
        </div>
    )

}
export default Input2;
