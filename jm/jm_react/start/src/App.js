import React from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'

export function List(){
    return(
        <h1>List Component</h1>
    );
}
export function Home(props){
    console.log(history)
    const goList = () => {
        props.history.push('/list')
    }

    return(
        <div>
            <h1>Home Component</h1>
            <button onClick={goList}>Go List</button>
        </div>
        
    )
}

function App(){
    return(
        <BrowserRouter>
            <nav>
                <Link to="/home">Home</Link>
                <Link to="/list">List</Link>
            </nav>
            <Switch>
                <Route path="/home" render={(props) => (
                    <Home history={props.history} />
                )} />
                
                <Route path="/list" component={List}/>
                <Redirect to="/home" />
            </Switch>
           
               
        </BrowserRouter>
    );
}
export default App;