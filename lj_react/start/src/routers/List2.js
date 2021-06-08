import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

var order = [
	{ id: 1, date: '2021', content: '사과 10개 구매' },
	{ id: 2, date: '2021', content: '포도 2개 구매' },
	{ id: 3, date: '2020', content: '사과 3개 구매' },
	{ id: 4, date: '2019', content: '오렌지 5개 구매' },
	{ id: 5, date: '2019', content: '무화과 9개 구매' },
	{ id: 6, date: '2019', content: '오이 9개 구매' },
	{ id: 7, date: '2018', content: '갈치 1마리 구매' },
];

function List2() {
	const [history, setHistory] = useState({});
	
	useEffect(() => {
		const newArray = order.reduce((acc, cur) => {
			return {
				...acc,
				[cur.date]: acc[cur.date] ? [ ...acc[cur.date], cur] : [ cur ]
			}
		}, {});
		setHistory(newArray);
		const objKey = Object.keys(newArray);
		console.log(objKey);
	}, []);

	return (
		<Wrapper>
			{Object.keys(history).map(item => (
				<div>
					<h1>{item}</h1>
					<ul>
						{history[item].map(child => (
							<li>{child.content}</li>
						))}
					</ul>
				</div>
			))}
		</Wrapper>
	);
}

export default List2;

const Wrapper = styled.section`
	div {
		h1 {
			font-size: 35px;
		}
		ul {
			li {
				border-bottom: 1px solid #ddd;
			}
		}
	}
`;