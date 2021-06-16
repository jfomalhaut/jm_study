import React, { useState } from 'react';
import { Login } from '../api';
import { useDispatch } from 'react-redux';
import { UserAction } from '../actions';

const field = {
	username: '',
	password: '',
};

function Signin() {
	const dispatch = useDispatch();
	const [userinfo, setUserinfo] = useState(field);
	const { username, password } = userinfo;

	const onChangeHandler = (ev) => {
		const { target: { name, value } } = ev;
		setUserinfo({
			...userinfo,
			[name]: value
		});
	};

	const login = async () => {
		dispatch(UserAction.login(userinfo));
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
	};

	const onSubmit = (ev) => {
		ev.preventDefault();
		login();
	};

	return (
		<form onSubmit={onSubmit}>
			<div>
				<input value={username} name="username" onChange={onChangeHandler} placeholder="아이디를 입력하세요" />
			</div>
			<div>
				<input type="password" value={password} name="password" onChange={onChangeHandler} placeholder="비밀번호를 입력하세요" />
			</div>
			<button>로그인</button>
		</form>
	)
}

export default Signin;