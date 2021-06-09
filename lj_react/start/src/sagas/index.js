import { spawn } from 'redux-saga/effects';
import UserSaga from './UserSaga';

export default function* rootSaga() {
	yield spawn(UserSaga);
};