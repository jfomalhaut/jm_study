import CounterReducer from './CounterReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    count: CounterReducer
});

export default rootReducer;
