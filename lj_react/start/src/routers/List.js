import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { ListItem } from '../components';

const PRODUCT = [
	{ id: 1, name: '사과', price: 1000 },
	{ id: 2, name: '포도', price: 2000 },
	{ id: 3, name: '귤', price: 3000 },
	{ id: 4, name: '참외', price: 4000 },
	{ id: 5, name: '무화과', price: 5000 }
];

function List() {
	const [total, setTotal] = useState(0);
	const [product, setProduct] = useState(PRODUCT);

	const onChange = (id, value) => {
		const count = value * 1;
		const newProduct = product.map(item => item.id === id ? ({ ...item, count }) : item);
		setProduct(newProduct);
	};

	useEffect(() => {
		const _total = product.reduce((acc, item) => {
			const ct = item.count ? item.count : 0;
			return acc + item.price * ct;
		}, 0);
		setTotal(_total);
	}, [product]);

	return (
		<Container>
			{product.map(item => (
				<ListItem item={item} onChange={onChange} key={`PRODUCT${item.id}`}/>
			))}
			<h1>Total : {total}원</h1>
		</Container>
	);
}

export default List;

const Container = styled.ul`

`;