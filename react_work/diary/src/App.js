import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { List, Write, Detail, Upload } from './routers';
import { Navigation } from './components';


const App = () => {
    return(
        <BrowserRouter>
            <Navigation />
            <Switch>
                <Route path="/upload" component={Upload} />
                <Route path="/list" component={List} />
                <Route path="/write" component={Write} />
                <Route path="/detail" component={Detail} />
                <Redirect to="/Upload" />
            </Switch>
        </BrowserRouter>
    )
}

export default App;