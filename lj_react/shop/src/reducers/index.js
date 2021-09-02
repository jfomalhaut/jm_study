import CartReducer from "./CartReducer";
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
	cart: CartReducer
});

export default rootReducer;