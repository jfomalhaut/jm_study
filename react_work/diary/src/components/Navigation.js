import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return(
       <header>
         <ul>
             <li>
                 <Link to="/list">다이어리 리스트</Link>
             </li>
             <li>
                 <Link to="/write">다이어리 작성</Link>
             </li>
         </ul>
       </header>
    )
}

export default Navigation;