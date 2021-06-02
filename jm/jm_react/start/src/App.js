import React from 'react';
import { BrowserRouter, Link, Redirect, Route, Switch } from 'react-router-dom';
import { PageA, PageB, Scroll, List } from './routers';



function App() {
	return (
		<BrowserRouter>
			<nav>
				<Link to="/pageA">PageA</Link>
				<Link to="/pageB">PageB</Link>
				<Link to="/Scroll">onScroll</Link>
				<Link to="/List">List</Link>
			</nav>

			<Switch >
				<Route path="/Scroll" component={Scroll}/>	
				<Route path="/pageA" component={PageA} />
				<Route path="/pageB" component={PageB} />
				<Route path="List" component={List} />
				<Route path="/home" exact render={(props) => (
					<Home history={props.history} />
				)} />
   				<Redirect to="/home" />
			</Switch>

		</BrowserRouter>
	);
}

export default App;




// export function Home(props) {
// 	console.log(props);

// 	const goList = () => {
// 		props.history.push('/list');
// 	};

// 	return (
// 		<div>
// 			<h1>Home Componet</h1>
// 			<button onClick={goList}>go List</button>
// 		</div>
// 	);
// }