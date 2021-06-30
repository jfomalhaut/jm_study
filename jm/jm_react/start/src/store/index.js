import { createStore, compose, applyMiddleware } from 'redux';
import rootReducer from '../reducers';
import rootSaga from '../sagas';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';

const persistConfig = {
    key: 'study_redux_saga',
    storage,
    whitelist:['user']
};

const enchancedReducer = persistReducer(persistConfig, rootReducer);
const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(enchancedReducer, composeEnhancers(applyMiddleware(sagaMiddleware)));
const persistor = persistStore(store);
sagaMiddleware.run(rootSaga);

export { store, persistor };