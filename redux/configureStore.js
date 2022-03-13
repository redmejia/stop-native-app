import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";

import { shirts } from "./ShirtsProduct";




// root reducer
const rootReducer = combineReducers({
	shirts : shirts,
})

export const ConfigureStore = () =>{
	const store = createStore(
		rootReducer,
		applyMiddleware(thunk, logger)

	)

	return store
}