import { compose, createStore, applyMiddleware } from "redux";
import rootReducer from '../reducers';
import rootSaga from '../sagas';
import createSagaMiddleWare from 'redux-saga'

const sagaMiddleware = createSagaMiddleWare();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(sagaMiddleware)));
sagaMiddleware.run(rootSaga)

export default store;