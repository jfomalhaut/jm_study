import React from 'react';
import { BrowserRouter, Link, Redirect, Route, Switch } from 'react-router-dom';
import { PageA, PageB } from './routers';


function App() {
	return (
		<BrowserRouter>
			<nav>
				<Link to="/pageA">PageA</Link>
				<Link to="/pageB">PageB</Link>
			</nav>

			<Switch>
				<Route path="/pageA" component={PageA} />
				<Route path="/pageB" component={PageB} />
				<Route path="/home" exact render={(props) => (
					<Home history={props.history} />
				)} />

				<Route path="/list" component={List} />
				<Redirect to="/home" />
			</Switch>

		</BrowserRouter>
	);
}

export default App;




export function List() {
	return (
		<h1>List Componet</h1>
	);
}

export function Home(props) {
	console.log(props);

	const goList = () => {
		props.history.push('/list');
	};

	return (
		<div>
			<h1>Home Componet</h1>
			<button onClick={goList}>go List</button>
		</div>
	);
}