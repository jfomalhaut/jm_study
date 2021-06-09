import { CounterAction } from '../actions';
const { INCREAMENT } = CounterAction;

const initialState = 0;

const CounterReducer = (state = initialState, action) => {
	switch (action.type) {
		case INCREAMENT: {
			return state + action.add;
		}

		default: {
			return state;
		}
	}
};

export default CounterReducer;