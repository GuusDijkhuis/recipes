const recipeReducers = (recipes = [], action) => {
	switch(action.type) {
		case 'CREATE':
			return [...recipes, action.payload];
		default: 
			return recipes;
	}
}

export default recipeReducers;