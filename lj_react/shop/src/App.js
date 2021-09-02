import React from 'react';
import { BrowserRouter, Redirect, Switch, Route } from 'react-router-dom';
import { Home, List, Cart } from './pages';
import { Header } from './components';

const App = () => {
	return (
		<BrowserRouter>
			<Header />
			<Switch>
				<Route path="/home" exact={true} component={Home} />
				<Route path="/list" component={List} />
				<Route path="/cart" component={Cart} />
				<Redirect to="/home" />
			</Switch>
		</BrowserRouter>
	);
};

export default App;