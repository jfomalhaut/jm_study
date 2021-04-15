import React from 'react';
import { BrowserRouter, Link, Redirect, Route, Switch } from 'react-router-dom';

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

function App() {
	return (
		<BrowserRouter>
			<nav>
				<Link to="/home">Home</Link>
				<Link to="/list">List</Link>
			</nav>

			<Switch>
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