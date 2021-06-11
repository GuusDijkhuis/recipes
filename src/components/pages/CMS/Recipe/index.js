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
	console.log(recipe);
	return (
		recipe ? (
			<div className={classes.container}>
				<h1>{recipe.title}</h1>
				<div className={classes.fieldset}>
					<img src={`http://localhost:5000/${recipe.picture}`} alt={recipe.title} />
				</div>
				<div className={classes.fieldset}>
					<div className={classes.info}>
						<h3>Kooktijd</h3>
						<span>{`${recipe.cookingtime.value} ${recipe.cookingtime.unit}`} </span>
					</div>
					<div className={classes.info}>
						<h3>Personen</h3>
						<span>{recipe.personCount}</span>
					</div>
				</div>
				<div className={classes.fieldset}>
					<h3>Ingredients</h3>
					<ul>
						{ 
							recipe.ingredients.map((ingredient, i) => (
								<li className={classes.info}>
									<span>{`${ingredient.name}`}</span>
									<span>{`${ingredient.quantity} ${ingredient.unit}`}</span>
								</li>
								)
							)
						}
					</ul>
				</div>
				<div className={classes.fieldset}>
					<h3>Tools</h3>
					<ul>
						{ 
							recipe.tools.map((tool, i) => (
								<li className={classes.info}>
									<span>{tool.name}</span>
								</li>
							)
						)}
					</ul>
				</div>
				<div className={classes.fieldset}>
					<h3>Tools</h3>
					<ul>
						{ 
							recipe.steps.map((step, i) => (
								<li className={classes.step}>
									<h3>{`${i+1} ${step.name}`}</h3>
									<p>{step.description}</p>
								</li>
							)
						)}
					</ul>
				</div>
			</div>
		) : ''
	);
}

export default Recipes;
