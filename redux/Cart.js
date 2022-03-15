import * as ActionType from './ActionType';

const initState = {
	cart: []
}

export const myOrderCart = (state = initState, action) => {
	switch (action.type) {
		case ActionType.ADD_ITEM_TO_CART:
			return { cart: [...state.cart, { ...action.payload }] }
		default:
			return state;
	}
}