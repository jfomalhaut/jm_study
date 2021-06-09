import { spawn } from "@redux-saga/core/effects";
import UserSaga from './UserSage'

export default function* rootSaga() {
    yield spawn(UserSaga);
};