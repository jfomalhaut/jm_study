const LOGIN = 'LOGIN';
const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
const LOGIN_FAILURE = 'LOGIN_FAILURE';
const LOGOUT = 'LOGOUT';
const SET_USER = 'SET_USER';
const RESTORE = 'RESTORE';

const login = (payload) => ({ type: LOGIN, payload });
const loginSuccess = (userinfo, token) => ({ type: LOGIN_SUCCESS, userinfo, token});
const loginFailure = (status) => ({ type: LOGIN_FAILURE, status});
const logout = () => ({ type: LOGOUT });
const setUser = (userinfo) => ({ type: SET_USER, userinfo});
const restore = () => ({ type: RESTORE });

export default {
    LOGIN,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    LOGOUT,
    SET_USER,
    RESTORE,
    login,
    loginSuccess,
    loginFailure,
    logout,
    setUser,
    restore
};
