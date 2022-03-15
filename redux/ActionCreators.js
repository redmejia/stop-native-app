import * as ActionType from '../redux/ActionType'
import { baseURL } from "../redux/baseUrl";

// Product shirts
const productShirtsLoadingFialed = (error) => ({
	type: ActionType.PRODUCT_SHIRTS_FAILED,
	payload: error,
})

// success 
const productShirtsLoaded = (shirts) => ({
	type: ActionType.PRODUCT_SHIRTS_LOADED,
	payload: shirts,
})

const productShirtLoading = () => ({
	type: ActionType.PRODUCT_SHIRTS_LOADING,
})

export const fetchProductShirts = () => async (dispatch) => {

	dispatch(productShirtLoading())

	try {
		const resp = await fetch(baseURL + 'shirts')
		if (resp.ok) {
			const data = await resp.json()
			return dispatch(productShirtsLoaded(data))
		}

	} catch (error) {
		return dispatch(productShirtsLoadingFialed(error))
	}
}

// Product pants
const productPantLoadingFailed = (error) => ({
	type: ActionType.PRODUCT_PANTS_FAILED,
	payload: error
})

const productPantLoaded = (pants) => ({
	type: ActionType.PRODUCT_PANTS_LOADED,
	payload: pants
})

const productPantLoading = () => ({
	type: ActionType.PRODUCT_PANTS_LOADING
})

export const fetchProductPants = () => async (dispatch) => {
	dispatch(productPantLoading())

	try {
		const response = await fetch(baseURL + 'pants')
		if (response.ok) {
			const data = await response.json();
			return dispatch(productPantLoaded(data))
		}
	} catch (error) {
		return dispatch(productPantLoadingFailed(error))
	}
}

// Order cart
const addItemToMyCart = (item) => ({
	type: ActionType.ADD_ITEM_TO_CART,
	payload: item
})

export const addItem = (item) => dispatch => {

	return dispatch(addItemToMyCart(item))

}