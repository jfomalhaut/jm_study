import React from 'react';
import { useDispatch } from 'react-redux';
import { CounterAction } from '../actions';

function PageA(){
	const dispatch = useDispatch();

	const increament = () => {
		// dispatch({ type: 'INCREAMENT', add: 100 });
		dispatch(CounterAction.increament(100));
	};


	return(
		<div>
			<h1>PAgeA</h1>
			<button onClick={increament}>increment</button>
		</div>
	)
};

export default PageA;
