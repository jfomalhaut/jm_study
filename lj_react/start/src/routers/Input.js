import React, { useState } from 'react';

function Input() {
	const [name, setName] = useState('');
	const [age, setAge] = useState('');
	const [phone, setPhone] = useState('');

	const onChangeHandler = (ev) => {
		// const value = ev.target.value;
		const { target: { value } } = ev;
		setName(value);
	};

	const onChangeHandler2 = (ev) => {
		const { target: { value } } = ev;
		setAge(value);
	};

	const onChangeHandler3 = (ev) => {
		const { target: { value } } = ev;
		setPhone(value);
	};

	return (
		<div>
			<h1>Input Component</h1>
			<div>
				<input value={name} onChange={onChangeHandler} placeholder="이름 값을 입력하세요" />
			</div>
			<div>
				<input value={age} onChange={onChangeHandler2} placeholder="나이 값을 입력하세요" />
			</div>
			<div>
				<input value={phone} onChange={onChangeHandler3} placeholder="전화번호 값을 입력하세요" />
			</div>
			<h1 style={{ color: 'red' }}>{name} {age} {phone}</h1>
		</div>
	);
}

export default Input;
