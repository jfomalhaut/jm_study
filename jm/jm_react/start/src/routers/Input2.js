import React, {useState, useEffect} from 'react';

const field = {
    name: '',
    age: '',
    phone: '',
}

function Input2(){
    const [info, setInfo] =useState(field);
    const [list, setList] = useState([]);
    const {name, age, phone} = info;

    const onChangeHandler = (ev) => {
        const { target: { value, id } } =ev;
        setInfo({
            ...info,
            [id]: value
        })
    }
    useEffect(()=>{
        console.log(info)
    },[info])
    //form 테그를 치면 엔터치면 바로 처리됨.. 그래서 form을 사용.. 하지만 새로고침이되어서 막아주어야함.
    
    const onSubmit = (ev) =>{
        ev.preventDefault(); //새로고침 막아..모든 이벤트 막아줌.
        console.log(info);
        setList([
            ...list,
            info
        ])
    }
    
    return(
        <div>
            <h1>Input2 Component</h1>
            <form onSubmit={onSubmit}>
                <input id="name" value={name} onChange={onChangeHandler}/>
                <input id="age" value={age} onChange={onChangeHandler}/>
                <input id="phone" value={phone} onChange={onChangeHandler}/>
        
                <button>확인</button>
            </form>
            <ul>
                {list.map((item,index)=>(
                    <li key={`PHONE${index}`}>
                        <div>name: {item.name}</div>
                        <div>age: {item.age}</div>
                        <div>phone: {item.phone}</div>
                    </li>
                ))}
            </ul>
        </div>
    )

}

export default Input2