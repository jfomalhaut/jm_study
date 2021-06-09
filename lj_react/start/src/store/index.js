import { createStore, compose, applyMiddleware } from "redux";
import rootReducer from '../reducers';
import rootSaga from '../sagas';
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(sagaMiddleware)));
sagaMiddleware.run(rootSaga);

export default store;