import {
  legacy_createStore,
  applyMiddleware,
  compose,
  combineReducers,
} from "redux";
import thunk from "redux-thunk";
import { userReducer } from "./user.reducer";

const createCompose = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  auth: userReducer,
});

export const store = legacy_createStore(
  rootReducer,
  createCompose(applyMiddleware(thunk))
);
