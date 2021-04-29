import * as api from '../api/recipes';

export const createRecipe = (recipe) => async (dispatch) => {
	try {
		const { data } = await api.createRecipe(recipe);
		dispatch({ type: 'CREATE', payload: data })
	} catch (error) {
		console.log(error);
	}
}