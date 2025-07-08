import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { authReducer } from "./reducers/authReducer";
import { thunk } from "redux-thunk";
import { bookReducer } from "./reducers/bookReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  book: bookReducer,
});

const middleware = applyMiddleware(thunk);

export const store = legacy_createStore(rootReducer, middleware);
