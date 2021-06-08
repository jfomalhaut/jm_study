import React, {useState} from 'react';
import { Login } from '../api'

const field = {
    username: '',
    password: '',
}

function Signin(){
    const [userinfo, setUserinfo] = useState(field);
    const {username, password} = userinfo

    const onChangeHandler = (ev) =>{
        const {target: {name, value}} =ev;
        setUserinfo({
            ...userinfo,
            [name]:value
        })
    }
    const login =async () =>{
        try{
            const {data} =await Login(userinfo);
            if(data) {
                alert('로그인 성공');
            }else{
                alert('로그인 실패')
            }
        }catch(error){
            console.log(error);
            alert('오류 발생 다시시도')
        }
    };
    const onSubmit = (ev) =>{
        ev.preventDefault();
        login();
    }

    return(
        <form onSubmit={onSubmit}>
            <div>
                <input value={username} name="username" onChange={onChangeHandler} placeholder="Id.." />
            </div>
            <div>
                <input value={password} name="password" onChange={onChangeHandler} placeholder="Password.." />
            </div>
            <button>로그인</button>
        </form>
    )
}
export default Signin