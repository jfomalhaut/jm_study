import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';
import styled from 'styled-components';

const server = 'http://localhost';
const socket = io(server);

const field = {
	type: '',
	nickname: '',
	message: '',
};

const Chat = () => {
	const [list, setList] = useState([]);
	const [values, setValues] = useState(field);
	const { type, nickname, message } = values;

	const onChangeHandler = (ev) => {
		const { target: { value, name } } = ev;
		setValues({
			...values,
			[name]: value
		});
	};

	const send = (ev) => {
		ev.preventDefault();
		const payload = {
			type: 'message',
			nickname,
			msg: message
		};
		
		socket.emit('message', payload);
	};

	const firstVisit = () => {
		const payload = {
			type: 'connect',
			nickname: '손님'
		};
		socket.on('connect', () => {
			socket.emit('newUser', payload);
		});
	};

	const getMessage = (info) => {
		const result = list.concat({
			nickname: info.nickname,
			message: info.msg
		});
		setList(result);
	};

	useEffect(() => {
		socket.on('update', (info) => {
			const result = {
				type: 'disconnect',
				nickname: info.nickname,
				message: '접속종료되었습니다'
			};
			setList(prev => prev.concat(result));
		});

		socket.on('newUser', (info) => {
			const result = {
				nickname: '',
				message: '새 유저가 접속했습니다'
			};
			setList(prev => prev.concat(result));
		});

		socket.on('message', (info) => {
			const result = {
				nickname: info.nickname,
				message: info.msg
			};
			setList(prev => prev.concat(result));
			setValues(prev => { 
				return {
					...prev, 
					message: ''
				}
			});
		});
		firstVisit();
	}, []);

	return (
		<Container>
			<form onSubmit={send}>
				<input value={nickname} name="nickname" onChange={onChangeHandler} placeholder="닉네임" />
				<input value={message} name="message" onChange={onChangeHandler} placeholder="메시지를 입력하세요" />
				<button>보내기</button>
			</form>
			<ul>
				{list.map((item, idx) => (
					<li key={`MESSAGE${idx}`}>
						{item.nickname !== '' && (
							<label>{item.nickname}</label>
						)}
						<span>{item.message}</span>
					</li>
				))}
			</ul>
		</Container>
	)
}

export default Chat;

const Container = styled.main`
	form {}
	ul {
		li {
			display: flex;
			label {
				font-weight: bold;
				margin-right: 20px;
			}
		}
	}
`;