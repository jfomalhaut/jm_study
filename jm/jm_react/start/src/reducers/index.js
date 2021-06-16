import CounterReducer from './CounterReducer';
import UserReducer from './UserReducer'
import { combineReducers } from 'redux';

// combineReducers는 다양한 Reducer들을 묶어주는(통합해주는) 역할을 한다.
const rootReducer = combineReducers({
	count: CounterReducer,
	user: UserReducer,
});

export default rootReducer;