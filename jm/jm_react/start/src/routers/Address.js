import React,{useState} from 'react'
import Axios from 'axios';

const URL='https://www.juso.go.kr/addrlink/addrLinkApi.do'
const CONFIRM_KEY='devU01TX0FVVEgyMDIxMDUxMzIxMTM0OTExMTE2MTg=';

function Address(){
    
    const [keyword, setKeyword]=useState('');
   

    const onChangeHandler = (ev) =>{
        const { target: {value} } =ev;
        setKeyword(value);
    }

    const onSubmit = (ev) =>{
        ev.preventDefault();
        search();
        
    };
    const search = async() =>{
        const payload={
            confmKey: CONFIRM_KEY,
            currentPage: 1,
            countPerPage: 10,
            resultType: 'json',
            keyword
        };
        const str = Object
                        .keys(payload)
                        .map(item => `${item}=${payload[item]}`)
                        .join('&');
        console.log(str)
        const url=`${URL}?${str}`;
        const result = await Axios(url);
        // const { data : {results: {common, juso}}} = await Axios(url)
        console.log(result);
        console.log(juso);
        setKeyword(info)
    }

    return(
        <section>
            <h1>Address Component</h1>
            <form onSubmit={onSubmit}>
                <input value={keyword} onChange={onChangeHandler}/>
                <button>검색</button>
                
            </form>

            <div>{keyword}</div>
        </section>
    );
}

export default Address;