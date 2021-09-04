import React, {useState, useEffect} from 'react';
import io from 'socket.io-client';
import styled from 'styled-components';

const server = 'http://localhost';
const socket = io(server);

const field = {
    nickname: '',
    message: '',
};



const Chat = () => {
    const [list, setList] = useState([])
    const [values, setValues] = useState(field);
    const { nickname, message} = values;

    const onChangeHandler = (ev) => {
        const { target: {value, name} } = ev;
        setValues({
            ...values,
            [name]: value
        })
    }
    
    const send = (ev) => {
        ev.preventDefault();
        const payload = {
            type: 'message',
            nickname,
            msg: message
        }
    
        socket.emit('message', payload)
    }
    
    const firstVisit = () => {
        const payload ={
            type: 'connect',
            nickname: '손님'
        };
        socket.on('connect', ()=>{
            socket.emit('newUser', payload);
        })
    }

    const getMessage = (info) => {
        console.log(list);
        const result = list.concat({
            nickname: info.nickname,
            message: info.msg
        });
        setList(result);
    }

    useEffect(()=>{
        firstVisit();

        socket.on('update', (info)=>{
            console.log(info);
            switch(info.type){
                case 'message': getMessage(info); break;
            }
          
        })
    },[])

    return(
        <div>
            <form onSubmit={send}>
                <input value={nickname} name="nickname" onChange={onChangeHandler} placeholder="닉네임" />
                <input value={message} name="message" onChange={onChangeHandler} placeholder="메세지를 입력하시오" />
                <button>보내기</button>
            </form>
            <ul>
                {list.map((item,idx)=>{
                    <li key={`MESSAGE${idx}`}>
                        <label>{item.nickname}</label>
                        <p>{item.message}</p>
                    </li>
                })}
            </ul>
        </div>
    )
}


export default Chat;

