import { combineReducers } from "redux";
import shoppingCartReducer from "./CartState/Cart.reducer";
import { userReducer } from "./UserState/User.reducer";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
};

const rootReducer = combineReducers({
  user: userReducer,
  cart: shoppingCartReducer,
});

export default persistReducer(persistConfig, rootReducer);
