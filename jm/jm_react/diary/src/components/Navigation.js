import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return(
        <header>
            <nav>
                <Link to="/list">다이어리 리스트</Link>
                <p/>
                <Link to="/write">다이어리 작성</Link>
                <p/>
                <Link to="/list">List</Link>
            </nav>
        </header>
    )
}

export default Navigation;