import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router';

const GuardRoute = ({ component: Component, ...res }) => {
	const { logged } = useSelector((state) => state.user);

	const Message = () => {
		alert('로그인이 필요합니다');
		return (
			<Redirect to="/signin" />
		)
	};

	return (
		<Route {...res} render={(props) => (
			logged ? (
				<Component { ...props } />
			) : (
				<Message />
			)
		)} />
	)
};

export default GuardRoute;