import CounterReducer from './CounterReducer';
import UserReducer from './UserReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
	count: CounterReducer,
	user: UserReducer,
})

export default rootReducer;