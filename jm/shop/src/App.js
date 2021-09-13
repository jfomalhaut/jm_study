import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import { Header } from './components';
import { Cart, Home, List } from './pages';
import Insert from './pages/Insert';

const App = () => {
	return(
		<BrowserRouter>
		<Header /> 
			<Switch>
				<Route path="/home" exact={true} component={Home} />
				<Route path="/list" component={List}/>
				<Route path="/cart" component={Cart}/>
				<Route path="/insert" component={Insert}/>
				<Redirect to="/home" />
			</Switch>
		</BrowserRouter>
	)
}

export default App;