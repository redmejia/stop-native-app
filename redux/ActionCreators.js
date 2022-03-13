import * as ActionType from '../redux/ActionType'
import { baseURL } from "../redux/baseUrl";

const productShirtsLoadingFialed = (error) => ({
	type: ActionType.PRODUCT_SHIRTS_FAILED,
	payload: error,
})

// success 
const productShirtsLoaded = (shirts) => ({
	type: ActionType.PRODUCT_SHIRTS_LOADED,
	payload: shirts,
})

const shirtsProductLoading = () =>({
	type : ActionType.PRODUCT_SHIRTS_LOADING,
})


export const fetchProductShirts = () => dispatch => {
	dispatch(shirtsProductLoading())

	return fetch(baseURL + 'shirts')
		.then(response => {
			if(response.ok){
				return response
			}else{
				const error = new Error("ERROR" + resp.status)
				error.response = response
				throw error
			}
		}, error =>{
			const errorm = new Error(error.message)
			throw errorm
		})
		.then(response => response.json())
		.then(data => dispatch(productShirtsLoaded(data)))
		.catch(error => dispatch(productShirtsLoadingFialed(error)))
		
} 


// export const fetchProductShirts = () => async (dispatch) => {

// 	dispatch(shirtsProductLoading())
	
// 	try {
// 		const resp = await fetch(baseURL + 'shirts')
// 		if (resp.ok) {
// 			const data = resp.json()
// 			return dispatch(productShirtsLoaded(data))
// 		}

// 	} catch (error) {
// 		return dispatch(productShirtsLoadingFialed(error))
// 	}
// }
