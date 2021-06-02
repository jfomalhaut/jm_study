import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import { ListItem } from '../components'

const PRODUCT = [
    {id:1, name11:'사과', price: 1000 },
    {id:2, name11:'사과', price: 1000 },
    {id:3, name11:'사과', price: 1000 },
    {id:4, name11:'사과', price: 1000 },
    {id:5, name11:'사과', price: 1000 },
];

function List(){
    const [total, setTotal] = useState(0);
    const [product, setProduct] = useState(PRODUCT);

    const onChange = ({id, value, name}) =>{
        const newProduct =product.map(item=>item.id === id ? ({...item, [name]:value}) : item);
        setProduct(newProduct)
    };

    useEffect(()=>{
        const _total = product.reduce((acc, item) => {
            const ct1 = item.count1 ? item.count1 : 0;
            const ct2 = item.count2 ? item.count2 : 0;
            return acc + item.price * ct1 * ct2;
            console.log(ct1)
            console.log(ct2)
        },0);
        setTotal(_total)
    },[product])

    return(
        <Container>
            {product.map(item => (
                <ListItem item={item} onChange={onChange} key={`PRODUCT${item.id}`}/>
                
            ))}
            <h1>{total}</h1>
        </Container>
    )
}
export default List;
const Container = styled.ul`

`;