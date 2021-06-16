import React, { useEffect, useState } from 'react';
import { Login } from '../api';
import { useDispatch, useSelector } from 'react-redux';
import { UserAction } from '../actions';

const field = {
	username: '',
	password: '',
};

function Signin({ history }) {
	const dispatch = useDispatch();
	const [userinfo, setUserinfo] = useState(field);
	const { username, password } = userinfo;

	const { logged, status } = useSelector(state => state.user);

	const onChangeHandler = (ev) => {
		const { target: { name, value } } = ev;
		setUserinfo({
			...userinfo,
			[name]: value
		});
	};

	const login = async () => {
		dispatch(UserAction.login(userinfo));
	};

	const onSubmit = (ev) => {
		ev.preventDefault();
		login();
	};

	useEffect(() => {
		if (logged) {
			history.push('/pageA');
		}
	}, [logged]);

	useEffect(() => {
		if (status === 1) {
			alert('일치하는 정보가 없습니다');
			setUserinfo({
				...userinfo,
				password: ''
			});
			dispatch(UserAction.restore());
		}
	}, [status]);

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