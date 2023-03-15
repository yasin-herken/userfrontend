import {combineReducers, configureStore} from '@reduxjs/toolkit';
import userReducer from "../Features/User/userSlice.js";
import cartReducer from "../Features/Cart/cartSlice.js";
import {FLUSH, PAUSE, PERSIST, persistReducer, persistStore, PURGE, REGISTER, REHYDRATE} from "redux-persist";
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: "root",
  version: 1,
  storage,
}

const rootReducer = combineReducers({user: userReducer, cart: cartReducer});
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  })
})
const Persistor = persistStore(store);
export {Persistor}
export default store