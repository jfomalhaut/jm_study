const initialState = 0;

const CounterReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'INCREAMENT': {
			return state + 1;
		}

		default: {
			return state;
		}
	}
};

export default CounterReducer;