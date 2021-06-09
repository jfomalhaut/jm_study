import { UserAction } from '../actions';
const {
	LOGIN,
	LOGIN_SUCCESS,
	LOGIN_FAILURE,
	LOGOUT,
	SET_USER,
	RESTORE,
} = UserAction;

const initialState = {
	userinfo: {},
	logged: false,
	token: '',
	status: 0
};

const UserReducer = (state = initialState, action) => {
	switch (action.type) {
		case LOGIN: {
			return state;
		}
		case LOGIN_SUCCESS: {
			return {
				...state,
				logged: true,
				userinfo: action.userinfo,
				token: action.token,
				status: 0
			}
		}
		case LOGIN_FAILURE: {
			return {
				...state,
				logged: false,
				userinfo: {},
				token: '',
				status: 1
			}
		}
		case LOGOUT: {
			return {
				...state,
				logged: false,
				userinfo: {},
				token: '',
				status: 0
			}
		}
		case RESTORE: {
			return {
				...state,
				status: 0,
				logged: false,
				token: '',
			}
		}
		case SET_USER: {
			return {
				...state,
				userinfo: action.userinfo
			}
		}
		default: {
			return state;
		}
	}
}

export default UserReducer;