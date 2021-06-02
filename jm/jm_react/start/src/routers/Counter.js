import React , {useState, useEffect} from 'react'

const Price = 3000;

function Counter(){
    const [count, setCount] = useState(0);
    const [fee, setFee] = useState(2500);

    const increament = () =>{
        setCount(count + 1);
    }
    const decreament = () =>{
        setCount( count - 1);
    }

    const Change = (ev) =>{
        if(ev){
            setCount( count + 1);
        }else{
            setCount( count - 1 )
        }
    }


    useEffect(()=>{
        if (fee===0){
            alert('..남는것도 없네')
        }
    },[fee])

useEffect(()=>{
    if(count<0){
        setCount(0);
        alert('0보다 작은값은 입력할 수 없습니다');;
        return;
    }
    setFee(Price * count >=30000 ? 0 : 2500)
},[count])

    return(
        <div>
            <h1>상품가: {Price}원</h1>
            <h1>배송료: {fee}원</h1>
            <h1>수량: {count}</h1>
            <h1>Total : {Price*count+fee}원</h1>
            <button onClick={increament}>증가</button>
            <button onClick={decreament}>감소</button>
            <button onClick={()=>{Change(true)}}>증가2</button>
            <button onClick={()=>{Change(false)}}>증가2</button>
        </div>
    )
}
export default Counter;