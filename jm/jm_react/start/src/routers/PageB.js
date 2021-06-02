import React from 'react';
import { useSelector } from 'react-redux';

function PageB() {
	const value = useSelector(({ count }) => count);
	
	return (
		<div>
			<h1>PageB, 구독중인 값: {value}</h1>
		</div>
	);
}

export default PageB;
