import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import Nav from '../../modules/Nav';
import { getRecipe } from '../../../actions/recipes';

import { translateUnit } from '../../../helpers';

import classes from './index.module.css';

const Recipe = () => {
	const { id } = useParams();
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getRecipe(id))
	}, [dispatch, id])

	const recipes = useSelector((state) => state.recipes);
	const recipe = recipes[0];
	return (
			<div>
				<Nav />
				<div className={classes.content}>
					{ 
						recipe ? (
							<div className={classes.container}>
								<div>
									<div className={classes.header}>
										<h1>{recipe.title}</h1>
										<p>{recipe.introduction}</p>
									</div>
								</div>
								<div>
									<img src={`https://recipes-application.herokuapp.com/${recipe.picture}`} alt={recipe.title} />
								</div>
								<div>
									<div className={classes.header}>
										<h1>Informatie</h1>
										<span>Bereidingstijd: {`${recipe.cookingtime.value} ${translateUnit(recipe.cookingtime.unit)}`}</span>
										<span>Personen: {recipe.personCount}</span>
									</div>
								</div>
								<div>
									<div className={classes.header}>
										<h1>Ingredienten</h1>
										<ul className={classes.list}>
											{ 
												recipe.ingredients.map((ingredient, i) => (
													<li key={i}>
														<span>{`${ingredient.name}`}</span>
														<span>{`${ingredient.quantity} ${translateUnit(ingredient.unit)}`}</span>
													</li>
												)
											)}
										</ul>
									</div>
								</div>
								<div>
									<div className={classes.header}>
										<h1>Tools</h1>
										<ul className={classes.list}>
											{ 
												recipe.tools.map((tool, i) => (
													<li key={i}>
														<span>{tool.name}</span>
													</li>
												)
											)}
										</ul>
									</div>
								</div>
								<div>
									<div className={classes.header}>
										<h1>Steps</h1>
										<ul className={classes.stepList}>
											{ 
												recipe.steps.map((step, i) => (
													<li key={i}>
														<h3>{`${i+1} ${step.name}`}</h3>
														<p>{step.description}</p>
													</li>
												)
											)}
										</ul>
									</div>
								</div>
							</div>
						) : ''
					}
				</div>
			</div>
	);
}

export default Recipe;