import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import reducers from "./reducers/contact-reducer";

const rootReducer = combineReducers({ reducers });

const store = createStore(rootReducer, composeWithDevTools());

export default store;
