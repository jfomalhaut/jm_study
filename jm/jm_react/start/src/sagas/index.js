import { spawn } from "@redux-saga/core/effects";
import UserSaga from './UserSaga'

export default function* rootSaga() {
    yield spawn(UserSaga);
};