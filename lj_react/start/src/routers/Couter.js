import React, { useEffect, useState } from 'react';

const PRICE = 3000;

function Couter() {
	const [count, setCount] = useState(0);
	const [fee, setFee] = useState(2500);

	const increament = () => {
		setCount(count + 1);
	};
	
	const decreament = () => {
		setCount(count - 1);
	};
	
	const change = (fax) => {
		if (fax) {
			setCount(count + 1);
		} else {
			setCount(count - 1);
		}
	};

	useEffect(() => {
		if (fee === 0) {
			alert('...남는 것도 없네..');
		}
	}, [fee]);

	// componentDidUpdate
	useEffect(() => {
		// 30,000 이상 배송료 무료,
		// 30,000 미만 2,500
		// console.log(PRICE * count);
		// if (PRICE * count >= 30000) {
		// 	setFee(0);
		// } else {
		// 	setFee(2500);
		// }
		if (count < 0) {
			setCount(0);
			alert('0보다 작은 값은 입력할 수 없습니다');
			return;
		}
		setFee(PRICE * count >= 30000 ? 0 : 2500);
	}, [count]);

	// componentDidMount
	useEffect(() => {
		console.log('처음 시작할 때');
	}, []);

	return (
		<div>
			<h1>상품가: {PRICE}원</h1>
			<h1>배송료: {fee}원</h1>
			<h1>수량: {count}</h1>
			<h1>Total: {PRICE * count + fee}원</h1>
			<button onClick={increament}>증가</button>
			<button onClick={() => decreament()}>감소</button>
			<button onClick={() => change(true)}>증가2</button>
			<button onClick={() => change(false)}>감소2</button>
		</div>
	);
}

export default Couter;