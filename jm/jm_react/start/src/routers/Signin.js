import React, { useEffect, useState } from 'react';
import { Login } from '../api';
import { useDispatch, useSelector } from 'react-redux';
import { UserAction } from '../actions';
import App from '../App';

const field = {
	username:'',
	password:'',
};
function Signin({ history }){
	const dispatch=useDispatch();
	const [userinfo, setUserinfo] = useState(field);
	const {username, password} = userinfo;

	const { logged, status } = useSelector(state=>state.user);

	const onChangeHandler = (ev) => {
		const {target:{name, value}} = ev;
		setUserinfo({
			...userinfo,
			[name]:value,
		});
	};
	const login = async() => {
		dispatch(UserAction.login(userinfo));
	};
	const onSubmit = (ev) => {
		ev.preventDefault();
		login();
	};

	useEffect(()=>{
		if(logged){
			history.push('./pageA');
		}
	},[logged]);

	useEffect(()=>{
		if (status===1){
			alert('일치하는 정보가 없습니다');
			setUserinfo({
				...userinfo,
				password:''
			});
			dispatch(UserAction.restore());
		}
	},[status]);

	return(
		<form onSubmit={onSubmit}>
			<div>
				<input value={username} name="username" onChange={onChangeHandler} placeholder="Id를 입력하시요"/>
			</div>
			<div>
				<input value={password} name="password" onChange={onChangeHandler} placeholder="password를 입력하시오"/>
			</div>
			<button>로그인</button>
		</form>
	)
}
export default Signin;


// try {
		// 	console.log(userinfo);
		// 	const { data } = await Login(userinfo);
		// 	if (data) {
		// 		alert('로그인 성공!');
		// 	} else {
		// 		alert('일치하는 정보가 없습니다');
		// 	}
		// } catch (error) {
		// 	console.log(error);
		// 	alert('네트워크 오류 발생. 다시 시도해주세요.');
		// }