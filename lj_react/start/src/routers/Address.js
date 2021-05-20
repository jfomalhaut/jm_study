import React, { useEffect, useState } from 'react';
import Axios from 'axios';

const URL = 'https://www.juso.go.kr/addrlink/addrLinkApi.do';
const CONFIRM_KEY = 'devU01TX0FVVEgyMDIxMDUxMzIxMTM0OTExMTE2MTg=';

function Address() {
	// 바뀌는 부분만 state로 처리.
	const [list, setList] = useState([]);
	const [keyword, setKeyword] = useState('');  // 검색창에 들어가는 값
	const [keyword2, setKeyword2] = useState('');  // 검색시에 쓰이는 키워드
	const [currentPage, setCurrentPage] = useState(1);

	const onChangeHandler = (ev) => {
		const { target: { value } } = ev;
		setKeyword(value);
	};

	// 검색 버튼을 눌렀을 때
	const onSubmit = (ev) => {
		ev.preventDefault();
		setKeyword2(keyword);
		// search();
	};

	// 이 함수가 실행되어야 리스트가 변경된다.
	const search = async () => {
		const payload = {
			confmKey: CONFIRM_KEY,
			currentPage,
			countPerPage: 10,
			resultType: 'json',
			keyword: keyword2
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

	const nextPage = () => {
		setCurrentPage(currentPage + 1);
	};

	// 이 부분이 작동할 때에는 currentPage가 1이 되어야 한다.
	useEffect(() => {
		if (keyword2 !== '') {
			if (currentPage !== 1) {
				setCurrentPage(1);
			} else {
				search();
			}
		}
	}, [keyword2]);

	useEffect(() => {
		if (keyword2 !== '') {
			search();
		}
	}, [currentPage]); // 1

	return (
		<section>
			<h1>검색 키워드: {keyword2}</h1>
			<form onSubmit={onSubmit}>
				<input value={keyword} onChange={onChangeHandler} />
				<button>검색</button>
			</form>
			<ul>
				{list.map((item, idx) => (
					<li key={`ADDRESS${idx}`}>[{item.zipNo}] {item.roadAddrPart1}</li>
				))}
			</ul>
			<h3>현재페이지: {currentPage}</h3>
			<button onClick={nextPage}>다음</button>
		</section>
	);
}

export default Address;