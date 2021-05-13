import React, { useState } from 'react';
import Axios from 'axios';

const URL = 'https://www.juso.go.kr/addrlink/addrLinkApi.do';
const CONFIRM_KEY = 'devU01TX0FVVEgyMDIxMDUxMzIxMTM0OTExMTE2MTg=';

function Address() {
	const [list, setList] = useState([]);
	const [keyword, setKeyword] = useState('');

	const onChangeHandler = (ev) => {
		const { target: { value } } = ev;
		setKeyword(value);
	};

	const onSubmit = (ev) => {
		ev.preventDefault();
		search();
	};

	const search = async () => {
		const payload = {
			confmKey: CONFIRM_KEY,
			currentPage: 2,
			countPerPage: 10,
			resultType: 'json',
			keyword
		};

		const str = Object
							.keys(payload)
							.map(item => `${item}=${payload[item]}`)
							.join('&');

		const url = `${URL}?${str}`;
		const { data: { results: { common, juso } } } = await Axios(url);
		console.log(common);
		console.log(juso);
		setList(juso);
	};



	return (
		<section>
			<h1>Address Component</h1>
			<form onSubmit={onSubmit}>
				<input value={keyword} onChange={onChangeHandler} />
				<button>검색</button>
			</form>
			<ul>
				{list.map((item, idx) => (
					<li key={`ADDRESS${idx}`}>[{item.zipNo}] {item.roadAddrPart1}</li>
				))}
			</ul>
			<button>다음</button>
		</section>
	);
}

export default Address;