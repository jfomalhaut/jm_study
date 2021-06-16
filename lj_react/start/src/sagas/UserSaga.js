import Axios from 'axios';
import { UserAction } from '../actions';
import { call, put, takeLatest } from 'redux-saga/effects';
import { API } from '../api/index';

function* Signin(action) {
	const { payload } = action;
	// console.log(payload);

	try {
		const { data: { user, token } } = yield call([Axios, 'post'], API + '/user/signin', payload);
		if (user) {
			yield put(UserAction.loginSuccess(user, token));
		} else {
			throw false;
		}
	} catch (error) {
		// console.log(error);
		yield put(UserAction.loginFailure());
	}
}

export default function* watchUser() {
	yield takeLatest(UserAction.LOGIN, Signin);
};