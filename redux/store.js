import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist'

import rootReducer from './reducers';

const initialState = {};

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

 

export default () => {
  let store = createStore(
    persistedReducer,
    initialState,
    applyMiddleware(thunk),
  );
  let persistor = persistStore(store);
  return { store, persistor };
}
// export default store;