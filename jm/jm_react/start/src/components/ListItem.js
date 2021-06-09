import React from 'react';

function ListItem({onChange, item:{id, name, price, count=0}}){
	const onChangeHandler = (ev) =>{
		const {target:{value}} = ev;
		onChange(id, value);
	};
	return(
		<li>
			<h1>{name}</h1>
			<h2>{price}원</h2>
			<label>
				수량: <input type="text" value={count} onChange={onChangeHandler} />
			</label>
		</li>
	)
}
export default ListItem;