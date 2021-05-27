import React from 'react';
import { useDispatch } from 'react-redux';
import { CounterAction } from '../actions';

function PageA() {
	const dispatch = useDispatch();

	const increament = () => {
		// dispatch({ type: 'INCREAMENT', add: 100 });
		dispatch(CounterAction.increament(100));
	};

	return (
		<div>
			<h1>PageA</h1>
			<button onClick={increament}>increament</button>
		</div>
	);
}

export default PageA;


// 숙제:
// input으로 값을 받아서 그 값을 global state에 더해보기
