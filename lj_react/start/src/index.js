import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Counter from './routers/Counter';
import Input from './routers/Input';
import Input2 from './routers/Input2';
import Counter2 from './routers/Counter2';
import Address from './routers/Address';
import List from './routers/List';
import Scroll from './routers/Scroll';
import { Provider } from 'react-redux';
import store from './store';
import List2 from './routers/List2';
import Signin from './routers/Signin';

ReactDOM.render(
	// <Provider store={store}>
	// 	<App />
	// </Provider>,
	<Signin />, document.querySelector('#root')
);