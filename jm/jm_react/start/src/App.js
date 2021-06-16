import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { BrowserRouter, Link, Redirect, Route, Switch } from 'react-router-dom';
import { UserAction } from './actions';
import { PageA, PageB, Scroll, Signin } from './routers';
import GuardRoute from './guardroute';

function App(){
	const dispatch=useDispatch();
	const { logged } = useSelector((state)=>state.user);
	const value = useSelector(({count})=>count);

	const logout = () => {
		dispatch(UserAction.logout());
	}

	return(
		<BrowserRouter>
			<nav>
				<Link to="/pageA">PageA</Link>
				<Link to="/pageB">PageB</Link>
				<Link to="/scroll">Scroll</Link>
				{logged ? (
					<a onClick={logout}>로그아웃</a>
				): (<Link to="/signin">로그인</Link>)}
				<h1>{value}</h1>
			</nav>

			<Switch>
				<Route path="/scroll" component={Scroll} />
				<GuardRoute path="/pageA" component={PageA} />
				{/* <Route path="/pageA" render={(props)=>(
					<>
						{logged ? (
							<PageA {...props} />
						) : (
							<Redirect to="/signin"/>
						)}
					</>
				)}/> */}
				<Route path="/pageB" component={PageB} />
				<Route path="/signin" exact component={Signin} />
				<Route path="/home" render={(props)=>(
					<Home history={props.history} />
				)} />
				<Route path="/list" component={List} />
				<Redirect to="/signin" />
			</Switch>
		</BrowserRouter>
	)
}

export default App;

export function List(){
	return(
		<h1>List Component</h1>
	);
}

export function Home(props){
	console.log(props);

	const goList = () =>{
		props.history.push('/list');
	};
	return(
		<div>
			<h1>Home compoentn</h1>
			<button onClick={goList}>go List</button>
		</div>
	)
}