import React, { useReducer } from 'react';

// 하청업체
// 숙제:		1) 감소
//			  2) 내가 input창에 입력한 값을 더해서 돌려받기
const CountReducer = (state, action) => {
	switch(action.type) {
		case 'INCREAMENT': {
			return state + action.custom;
		}
		default: {
			return state;
		}
	}
};

function Counter2() {
	const [count, dispatch] = useReducer(CountReducer, 0);

	const increament = () => {
		dispatch({ type: 'INCREAMENT', custom: 10 });
	};

	return (
		<div>
			<h1>Count: {count}</h1>
			<button onClick={increament}>증가</button>
		</div>
	);
}

export default Counter2;