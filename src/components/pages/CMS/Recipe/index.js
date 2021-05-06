import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { getRecipe } from '../../../../actions/recipes';

import classes from './index.module.css';

const Recipes = () => {
	const { id } = useParams();
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getRecipe(id))
	}, [dispatch, id])

	const recipes = useSelector((state) => state.recipes);
	const recipe = recipes[0];
	return (
		<div className={classes.container}>
			<h1>Recipe: {id} </h1>
			<div className={classes.fieldset}>
				<div className={classes.info}>
					<h3>Naam</h3>
					<span>{recipe ? recipe.title : ''}</span>
				</div>
				<div className={classes.info}>
					<h3>Kooktijd</h3>
					<span>{recipe ? `${recipe.cookingtime.value} ${recipe.cookingtime.unit}` : ''}</span>
				</div>
				<div className={classes.info}>
					<h3>Personen</h3>
					<span>{recipe ? recipe.personCount : ''}</span>
				</div>
			</div>
		</div>
	);
}

export default Recipes;
