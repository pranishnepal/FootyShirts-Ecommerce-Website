import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import rootReducer from "./Root.reducer";
import { persistStore } from "redux-persist";

const middlewares = [logger];

export const reduxStore = createStore(
  rootReducer,
  applyMiddleware(...middlewares)
);

export const dataPersister = persistStore(reduxStore);
