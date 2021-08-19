import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { List, Write, Detail } from './routers';
import { Navigation } from './components';

const App = () => {
	return (
		<BrowserRouter>
			<Navigation />
			<Switch>
				<Route path="/list" component={List} />
				<Route path="/write" component={Write} />
				<Route path="/detail/:id" component={Detail} />
				<Redirect to="/list" />
			</Switch>
		</BrowserRouter>
	);
};

export default App;