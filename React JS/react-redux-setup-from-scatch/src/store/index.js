/** Siddharth Kumar Yadav
* © All rights reserved 
*/
import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import rootReducer from '../store/reducers';
const persistConfig = {
  key: 'root',
  storage: storage,
};
const pReducer = persistReducer(persistConfig, rootReducer);
const middleware = applyMiddleware(thunk);
const store = createStore(pReducer, middleware);
const persistor = persistStore(store);
export { persistor, store };