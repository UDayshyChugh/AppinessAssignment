import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'
import { routerReducer } from 'react-router-redux';

 import { PersistGate } from 'redux-persist/integration/react';
 const persistConfig = {
  key: 'root',
  storage: storage,
  whitelist:['Cart']

};

const appReducer = combineReducers({
  form: formReducer,

  routing: routerReducer
});

const rootReducer = (state, action) => {
  return appReducer(state, action)
}

export default persistReducer(persistConfig,rootReducer)
//export default rootReducer;