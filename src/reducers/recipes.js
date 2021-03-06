const recipeReducers = (recipes = [], action) => {
	
	switch(action.type) {
		case 'FETCH_ALL':
			return action.payload;
		case 'FETCH_ONE':
			return [action.payload._doc];
		case 'UPDATE':
		case 'CREATE':
			return [...recipes, action.payload];
		case 'DELETE':
			return recipes.filter(recipe => recipe._id !== action.payload)
		default: 
			return recipes;
	}
}

export default recipeReducers;