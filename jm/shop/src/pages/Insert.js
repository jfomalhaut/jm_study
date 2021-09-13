import React, {useState, useEffect} from 'react';
import { PostShop } from '../api'
import styled from 'styled-components';


const field = {
    shop_id: 50,
    shop_price: '',
    shop_name: '',
    shop_src: '',
  }
  
  const Insert = () => {
    const [shop, setShop] = useState([]);
    const [info, setInfo] = useState(field)
    const { shop_id, shop_price, shop_name, shop_src } = info;
  
    const onChangeValue = (ev) => {
        const { target: {name, value}} = ev;
        setInfo({
            ...info,
        })
    }
  
    const write = async (ev) => {
      ev.preventDefault();
      try{
          const {data} = await PostShop(info);
          if(data){
              alert('작성완료');
              setInfo(field);
          }
      }catch(error){
          console.log(error);
          alert('오류발생');
      }
    }

    useEffect(()=>{
      console.log(info);
    },[info])
  
    return (
      <Container>
        <main>
          <h1>상품등록</h1>
          <form onSubmit={write}>
            <div>
              <label>이름</label>
              <input
                type="text"
                name="shop_name"
                value={shop_name}
                onChange={onChangeValue}
              />
            </div>
            <div>
              <label>가격</label>
              <input
                name="shop_price"
                value={shop_price}
                onChange={onChangeValue}
              />
            </div>
            <button>작성</button>
          </form>
        </main>
      </Container>
    )
  }
  export default Insert;
  
  const Container = styled.section``
 