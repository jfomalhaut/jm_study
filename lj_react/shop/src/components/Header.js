import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

const Header = () => {
	const history = useHistory();
	const cart = useSelector(({ cart }) => cart.cart);


	return (
		<Container>
			<nav>
				<span onClick={() => history.push('/list')}>
					리스트로 가기
				</span>
				<span onClick={() => history.push('/cart')}>
					장바구니<b>({cart.length})</b>
				</span>
			</nav>
		</Container>
	);
};

export default Header;

const Container = styled.header`
	height: 100px;
	border-bottom: 1px solid #ddd;
	nav {
		span {
			font-size: 20px;
			margin-right: 20px;
			b {
				color: red;
			}
		}
	}
`;
