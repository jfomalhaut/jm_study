import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter, Link, Redirect, Route, Switch } from 'react-router-dom';
import { PageA, PageB, Scroll } from './routers';


function App() {
	const value = useSelector(({ count }) => count);
	return (
		<BrowserRouter>
			<nav>
				<Link to="/pageA">PageA</Link>
				<Link to="/pageB">PageB</Link>
<<<<<<< HEAD
				<Link to="/Scroll">Scroll</Link>
=======
				<Link to="/scroll">Scroll</Link>
				<h1>{value}</h1>
>>>>>>> d6060014452aa0c8204d9dbaf636697617d6a396
			</nav>

			<Switch>
				<Route path="/scroll" component={Scroll} />
				<Route path="/pageA" component={PageA} />
				<Route path="/pageB" component={PageB} />
				<Route path="/Scroll" component={Scroll} />
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