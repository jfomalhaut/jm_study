import { CartAction } from '../actions';
const { ADD_TO_CART, REMOVE_ALL, CHECK_ITEM, REMOVE_ITEM } = CartAction;

const initialState = {
	cart: []
};

const CartReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_TO_CART: {
			const ids = state.cart.map(item => item.id);
			const flag = ids.indexOf(action.item.id) === -1 ? true : false; // true: 새로 담아도 된다, false : 새로 담으면 안 된다.
			return {
				...state,
				cart: flag ? 
				[
					...state.cart,
					{ ...action.item, check: true, count: 1 }
				] : state.cart.map(item => item.id === action.item.id ? ({ ...item, count: item.count + 1 }) : item)
			}
		}
		case REMOVE_ALL: {
			return {
				...state,
				cart: []
			}
		}

		case REMOVE_ITEM: {
			return {
				...state,
				cart: state.cart.filter(item => item.id !== action.id)
			}
		}

		case CHECK_ITEM: {
			return {
				...state,
				cart: state.cart.map(item => item.id === action.id ? ({ ...item, check: !item.check }) : item)
			}
		}

		default: {
			return state;
		}
	}
};

export default CartReducer;