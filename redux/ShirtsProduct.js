import * as ActionType from './ActionType'

const initState = {
	loading: false,
	error: null,
	shirts: []
}

export const shirts = (state = initState, action) => {
	switch (action.type) {
		case ActionType.PRODUCT_SHIRTS_LOADED:
			return {
				...state,
				loading: false,
				error: null,
				shirts: action.payload.shirts
			}

		// case ActionType.PRODUCT_SHIRTS_LOADING:
		// 	return {
		// 		...state,
		// 		loading: true,
		// 		error: null,
		// 		shirts: action.payload
		// 	}

		// case ActionType.PRODUCT_SHIRTS_FAILED:
		// 	return {
		// 		...state,
		// 		loading: true,
		// 		error: action.payload.error,
		// 		shirts: action.payload
		// 	}

		default:
			return state
	}
}