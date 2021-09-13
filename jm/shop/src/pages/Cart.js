import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { CartAction } from '../actions'
import { Comma } from '../customs'

const CartItem = ({ item }) => {
	const dispatch = useDispatch()
	
	const check = () => {
		dispatch(CartAction.checkItem(item.id))
	}
	const removeItem = () => {
		dispatch(CartAction.removeItem(item.id))
	}
 
  return (
    <li>
      <figure onClick={check}>
        <img src={item.src} />
        <span className={item.check ? 'active' : ''} />
      </figure>
      <article>
        <h3>{item.name}</h3>
        <p>{Comma(item.price)}원</p>
        <input value={item.count} />
		<button onClick={removeItem}>삭제</button>
      </article>
    </li>
  )
}

const Cart = () => {
	const [total, setTotal] = useState(0)
  const dispatch = useDispatch()
  const cart = useSelector(({ cart }) => cart.cart)

  const removeAll = () => {
    dispatch(CartAction.removeAll())
  }

  const calculating = () => {
	  const _total = cart.reduce((acc, cur) => {
		  return acc+(cur.check ? (cur.price*cur.count) : 0);
	  },0);
	  setTotal(_total)
  }

  useEffect(()=>{
	  calculating();
  },[cart])

  return (
    <Container>
      <h1>상품리스트</h1>
      <nav>
        <button onClick={removeAll}>전체삭제</button>
      </nav>
      <ul>
        {cart.map((item) => (
          <CartItem item={item} key={`PRODUCT${item.id}`} />
        ))}
      </ul>
	  <footer>
		  <h1>합계</h1>
		  <h1>{Comma(total)}</h1>
	  </footer>
    </Container>
  )
}

export default Cart;

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
      box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
      list-style: none;
      width: calc((100% - 20px * 3) / 4);
      article {
        padding: 10px;
        p {
          font-size: 20px;
          color: #ff1000;
          font-weight: bold;
        }
      }
      figure {
        margin: 0;
        position: relative;
        span {
          position: absolute;
          left: 10px;
          top: 10px;
          background: #fff;
          border: 1px solid #bbb;
          display: block;
          width: 20px;
          height: 20px;
          &.active:before {
            position: absolute;
            content: '';
            width: 14px;
            height: 14px;
            background: #444;
            transform: translate(3px, 3px);
          }
        }
        img {
          width: 100%;
        }
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
`
