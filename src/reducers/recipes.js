const recipeReducers = (recipes = [], action) => {
	switch(action.type) {
		case 'FETCH_ALL':
			return action.payload;
		case 'FETCH_ONE':
			return [action.payload];
		case 'CREATE':
			return [...recipes, action.payload];
		default: 
			return recipes;
	}
}

export default recipeReducers;