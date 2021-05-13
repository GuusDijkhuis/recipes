import axios from 'axios';

const url = 'https://recipes-application.herokuapp.com/recipes';

export const createRecipe = (recipe) => axios.post(url, recipe); 
export const getAllRecipes = () => axios.get(url);
export const getRecipe = (id) => axios.get(`${url}/${id}`);
export const deleteRecipe = (id) => axios.delete(`${url}/${id}`);
export const updateRecipe = (id, recipe) => axios.patch(`${url}/${id}`, recipe);