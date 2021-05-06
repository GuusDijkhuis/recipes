import * as api from '../api/recipes';


export const getAllRecipes = () => async (dispatch) => {
	try {
		const { data } = await api.getAllRecipes();
		dispatch ({ type: 'FETCH_ALL', payload: data })
	} catch (error) {
		console.log(error);
	}
}
export const createRecipe = (recipe) => async (dispatch) => {
	try {
		const { data } = await api.createRecipe(recipe);
		dispatch({ type: 'CREATE', payload: data })
	} catch (error) {
		console.log(error);
	}
}
export const getRecipe = (id) => async (dispatch) => {
	try {
		const { data } = await api.getRecipe(id);
		dispatch({ type: 'FETCH_ONE', payload: data })
	} catch (error) {
		console.log(error);
	}
}
export const deleteRecipe = (id) => async (dispatch) => {
	try {
		dispatch({ type: 'DELETE', payload: id })
		await api.deleteRecipe(id);
	} catch (error) {
		console.log(error);
	}
}