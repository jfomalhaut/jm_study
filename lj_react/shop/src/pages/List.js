import React from 'react';
import styled from 'styled-components';
import { Comma } from '../customs';

import Product1 from '../assets/products/8801037044041.jpg';
import Product2 from '../assets/products/8801037044775.jpg';
import Product3 from '../assets/products/8801037044782.jpg';
import Product4 from '../assets/products/8801037044799.jpg';
import Product5 from '../assets/products/8801037044805.jpg';
import Product6 from '../assets/products/8801037044812.jpg';
import Product7 from '../assets/products/8801037044829.jpg';
import Product8 from '../assets/products/8801037044959.jpg';
import Product9 from '../assets/products/8801037046021.jpg';
import Product10 from '../assets/products/8801037046298.jpg';
import { useDispatch } from 'react-redux';
import { CartAction } from '../actions';

const DATA = [
	{ id: 1, name: '맥심커피 200g', src: Product1, price: 20400, },
	{ id: 2, name: '맥심 아이스 커피 200g', src: Product2, price: 22500, },
	{ id: 3, name: '동원 커피 200g', src: Product3, price: 30430, },
	{ id: 4, name: '아메리카노 200g', src: Product4, price: 12020, },
	{ id: 5, name: '카페라떼 200g', src: Product5, price: 43000, },
	{ id: 6, name: '카푸치노 200g', src: Product6, price: 52300, },
	{ id: 7, name: '카페모카 200g', src: Product7, price: 21000, },
	{ id: 8, name: '마끼아또 200g', src: Product8, price: 12500, },
	{ id: 9, name: '맥심커피 500g', src: Product9, price: 23400, },
	{ id: 10, name: '맥심커피 300g', src: Product10, price: 24000, },
];

const ListItem = ({ item }) => {
	const dispatch = useDispatch();

	const addToCart = () => {
		dispatch(CartAction.addToCart(item));
	};

	return (
		<li>
			<img src={item.src} />
			<article>
				<h3>{item.name}</h3>
				<p>{Comma(item.price)}원</p>
			</article>
			<button onClick={addToCart}>담기</button>
		</li>
	);
}

const List = () => {
	return (
		<Container>
			<h1>상품리스트</h1>
			<ul>
				{DATA.map(item => (
					<ListItem item={item} key={`PRODUCT${item.id}`} />
				))}
			</ul>
		</Container>
	);
};

export default List;

const Container = styled.main`
	width: 1000px;
	margin: 0 auto;

	ul {
		display: flex;
		flex-wrap: wrap;
		gap: 20px;
		padding: 20px;
		margin: 0;
		li {
			box-sizing: border-box;
			box-shadow: 0 0 15px rgba(0, 0, 0, .1);
			list-style: none;
			width: calc((100% - 20px * 3) / 4);
			article {
				padding: 10px;
				p {
					font-size: 20px;
					color: #FF1000;
					font-weight: bold;
				}
			}
			img {
				width: 100%;
			}
			button {
				border: none;
				width: 100%;
				padding: 10px 0;
				font-weight: bold;
				font-size: 18px;
				background: #444;
				color: #fff;
			}
		}
	}
`;