import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";

// reducer here


// root reducer
const rootReducer = combineReducers({
	shirts
})

export const ConfigureStore = () =>{
	const store = createStore(
		rootReducer,
		applyMiddleware(thunk, logger)

	)

	return store
}