import React from 'react';

function ListItem({ onChange, item: { id, name11, price, count1 = 0, count2=0 } }) {
	const onChangeHandler = (ev) => {
		const { target: { value, name} }  = ev;
		onChange({id, value, name});
	};

	return (
		<li>
			<h1>{name11}</h1>
			<h3>{price}원</h3>
			<label>
				수량 : <input type="text" name="count1" value={count1} onChange={onChangeHandler} />
			</label>
            <label>
				수량2 : <input type="text" name="count2" value={count2} onChange={onChangeHandler} />
			</label>
		</li>
	)
}

export default ListItem;