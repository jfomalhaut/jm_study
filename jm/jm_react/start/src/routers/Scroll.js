import React, {useEffect, useState} from 'react';
import styled, {css} from 'styled-components'

function Scroll(){
    const [active, setActive] =useState(false)

    const onScrollHandler = () =>{
        const { scrollY } = window
        if(scrollY === 0){
            setActive(false);
        }else{
            setActive(true);
        }
        console.log(scrollY)
    }

useEffect(()=>{
    window.addEventListener('scroll', onScrollHandler);
    return() =>{
        window.removeEventListener('scroll', onScrollHandler)
    }

},[])

    return(
        <Container active={active}>
            <header>
                 <h1>Header {active ? 'true' : 'false'} </h1>
            </header>
            <main>
                {[  ...Array(50) ].map((item, idx)=>(
                    <h2 key={`ITEM${idx}`}>Scrolling...</h2>
                ))}
            </main>
        </Container>
    )
}

export default Scroll;

const activeStyle = css`
    background: #000;
    h1{
        color: #fff;
    }
`

const Container = styled.main`
    header {
        height : 100px;
        width: 100vw;
        background: #fff;
        position: fixed;
        left:0;
        top:0;
        border-bottom: 1px solid;
        h1{
            text-align:center;
            line-height: 100px;
            margin: 0; padding:0;
            color: #222
        }
        ${props => props.active && activeStyle}
    }
    main{
        background: #f0f0f0;
        padding-top:100px;
    }
`