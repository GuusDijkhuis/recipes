import axios from 'axios';

const url = 'http://localhost:5000/recipes';

export const createRecipe = (recipe) => axios.post(url, recipe); 
export const getAllRecipes = () => axios.get(url);