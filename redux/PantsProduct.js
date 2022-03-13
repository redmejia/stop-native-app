import * as ActionType from './ActionType';

const initState = {
	loading: false,
	error: null,
	pants: []
}

export const pants = (state = initState, action) => {
	switch (action.type) {
		case ActionType.PRODUCT_PANTS_LOADED:
			return { ...state, loading: false, error: null, pants: action.payload.pants }
		case ActionType.PRODUCT_PANTS_LOADING:
			return { ...state, loading: true, error: null, pants: action.payload }
		case ActionType.PRODUCT_PANTS_FAILED:
			return { ...state, loading: true, error: action.payload.error, pants: action.payload }
		default:
			return state
	}
}

