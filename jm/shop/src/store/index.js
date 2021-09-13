import { createStore} from 'redux';
import { persistReducer, persistStore } from 'redux-persist'
import rootReducer from '../reducers'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
	key: 'jmShopStorage',
	storage,
	whitelist: ['cart']
};

const enhancedReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(enhancedReducer);
const persistor = persistStore(store);

export { store, persistor}

