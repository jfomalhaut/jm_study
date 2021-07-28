import React, {useEffect, useState} from 'react';
import { GetDiaryPost, GetCategory } from '../api';
import styled from 'styled-components'

const List = () => {
    const [selected, setSelected] = useState(0);
    const [category, setCategory] = useState([]);

    const getCategory = async() => {
        try{
            const {data} = await GetCategory();
            console.log(data);
            setCategory(data)
        }catch(error){
            console.log(error);
        }
    }

    

    const getPost = async(category_id) => {
        setSelected(category_id);
        // try{
        //     const payload ={
        //         category_id
        //     }
        //     const {data} = await GetDiaryPost(payload);
        //     console.log(data);
        // }catch(e){
        //     console.log(error)
        // }
    };
    useEffect(()=>{
        getCategory()
    },[]);

    const getCategoryPost = async() => {
        try{
            const {data} = await GetDiaryPost();
            console.log(data);
        }catch(error){
            console.log(error)
        }

    }
    useEffect(()=>{
        getCategoryPost()
    },[])

    return(
        <Container>
        <div>
            <h1>List Component</h1>
            <main>
                <nav>
                    {category.map(item=>(
                        <span className={selected === item.category_id ? 'active' : ''} onClick={()=>getPost(item.category_id)}>
                            {item.category_name}
                            <b>({item.count})</b>
                        </span>
                    ))}
                </nav>
            </main>
        </div>
        </Container>
    )
}

export default List;

const Container = styled.div`
    div{
        width:1000px;
        margin: 0 auto;
        main{
            nav{
                display:flex;
                border: 1px solid #bbb;
                span{
                    cursor: pointer;
                    flex-grow: 1;
                    line-height: 40px;
                    text-align: center;
                    &:not(:last-child){
                        border-right: 1px solid #bbb;
                    }
                    &.active{
                        background: dodberblue;
                        color:#fff;
                    }
                }
            }
        }
    }
`