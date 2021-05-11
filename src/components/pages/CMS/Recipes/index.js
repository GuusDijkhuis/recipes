import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

import Button from '../../../elements/Button';

import { getAllRecipes, deleteRecipe } from '../../../../actions/recipes';

import classes from './index.module.css';

const Recipes = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getAllRecipes())
	}, [dispatch])

	const recipes = useSelector((state) => state.recipes);
	return (
		recipes ? (
			<div className={classes.container}>
				<h1>Recipes</h1>
				<ul className={classes.list}>
					<li key={uuidv4()} className={classes.listItem}>
						<span>Id</span>
						<span>Name</span>
						<span>Time</span>
					</li>
					{
						recipes.length !== 0 ? (
							recipes.map((recipe, i) => (
								<li key={uuidv4()}>
									<span>{i+1}</span>
									<span>{recipe.title}</span>
									<span>{recipe.cookingtime ? `${recipe.cookingtime.value} ${recipe.cookingtime.unit}` : ''}</span>
									<div className={classes.buttons}>
										<Button
											link={`/cms/recipes/${recipe._id}`}
											type="button"
											classes="secondary naked"
											label="details"
										/>
										<Button
											link={`/cms/recipes/edit/${recipe._id}`}
											type="button"
											classes="secondary naked"
											label="edit"
										/>
										<Button
											type="button"
											classes="danger naked"
											eventClick={(e) => dispatch(deleteRecipe(recipe._id))}
											label="remove"
										/>
									</div>
								</li>
							))
						) : (
							<li key={uuidv4()}>
								<span>-</span>
								<span>-</span>
								<span>-</span>
								<span>-</span>
							</li>
						)
					}
				</ul>
			</div>
		) : ''
	);
}

export default Recipes;
