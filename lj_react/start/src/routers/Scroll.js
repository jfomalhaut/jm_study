import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';

function Scroll() {
	const [active, setActive] = useState(false);

	const onScrollHandler = () => {
		const { scrollY } = window;
		if (scrollY === 0) {
			// 붙었을 때
			setActive(false);
		} else {
			// 안 붙은 것
			setActive(true);
		}
	};

	useEffect(() => {
		window.addEventListener('scroll', onScrollHandler);
		// html이 하나이기 때문에 아래 부분을 생략하게 되면
		// 다른 페이지에서도 scroll 이벤트가 상시 돌게 된다.
		// 그래서 다른 페이지로 이동할 때에는 eventListener를 제거하여 
		// 속도에 지장이 가지 않게 한다.
		return () => {
			window.removeEventListener('scroll', onScrollHandler);
		}
	}, []);

	return (
		<Container active={active}>
			<header>
				<h1>Header {active ? 'true' : 'false'}</h1>
			</header>
			<main>
				{[ ...Array(50) ].map((item, idx) => (
					<h2 key={`ITEM${idx}`}>Scrolling...</h2>
				))}
			</main>
		</Container>
	);
}

export default Scroll;

const activeStyle = css`
	background: #000;
	h1 {
		color: #fff;
	}
`;

const Container = styled.main`
	header {
		height: 100px;
		width: 100vw;
		${'' /* background: ${props => props.active ? '#000' : '#fff'}; */}
		background: #fff;
		position: fixed;
		left: 0;
		top: 0;
		border-bottom: 1px solid;
		h1 {
			text-align: center;
			line-height: 100px;
			margin: 0; padding: 0;
			color: #222;
		}
		${props => props.active && activeStyle}
	}
	main {
		background: #f0f0f0;
		padding-top: 100px;
	}
`;