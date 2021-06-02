import React, { useState, useEffect } from 'react';
import Axios from 'axios';

const URL = 'https://www.juso.go.kr/addrlink/addrLinkApi.do';
const CONFIRM_KEY = 'devU01TX0FVVEgyMDIxMDUxMzIxMTM0OTExMTE2MTg=';

function Address() {
	const [list, setList] = useState([]);
	const [keyword, setKeyword] = useState(''); //검색창에 들어가는 값
    const [keyword2, setKeyword2] = useState(''); //검색시에 들어가는 값
    const [currentPage, setCurrentPage] = useState(1)

	const onChangeHandler = (ev) => {
		const { target: { value } } = ev;
		setKeyword(value);
	};

	const onSubmit = (ev) => {
		ev.preventDefault();
        setKeyword2(keyword);
		// search();
	};

	const search = async () => {
      
		const payload = {
			confmKey: CONFIRM_KEY,
			currentPage,
			countPerPage: 10,
			resultType: 'json',
			keyword: keyword2,
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

    const nextPage = () =>{
        setCurrentPage( currentPage + 1)
    }

    useEffect(()=>{
        if (keyword2 !== ''){
            if(currentPage !==1){
                setCurrentPage(1);
            }else{
                search();
            }
        }
    },[keyword2])

    useEffect(()=>{
        if (keyword2 !== ''){ 
            search();
        }
    },[currentPage])

	return (
		<section>
			<h1>검색 키워드:{keyword2}</h1>
			<form onSubmit={onSubmit}>
				<input value={keyword} onChange={onChangeHandler} />
				<button>검색</button>
			</form>
			<ul>
				{list.map((item, idx) => (
					<li key={`ADDRESS${idx}`}>[{item.zipNo}] {item.roadAddr}</li>
				))}
			</ul>
            <h3>현재페이지:{currentPage}</h3>
			<button onClick={nextPage}>다음</button>
		</section>
	);
}

export default Address;