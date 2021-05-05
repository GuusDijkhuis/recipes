import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

import Button from '../../../elements/Button';

import { getAllRecipes } from '../../../../actions/recipes';

import classes from './index.module.css';

const Recipes = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getAllRecipes())
	}, [dispatch])

	const recipes = useSelector((state) => state.recipes);
	console.log(2, recipes);
	return (
		recipes.length !== 0 ? (
			<div className={classes.container}>
				<h1>Recipes</h1>
				<ul className={classes.list}>
					<li key={uuidv4()} className={classes.listItem}>
						<span>Id</span>
						<span>Name</span>
						<span>Time</span>
					</li>
					{
						recipes.map((recipe, i) => (
							<li key={uuidv4()}>
								<span>{i}</span>
								<span>{recipe.title}</span>
								<span>{recipe.cookingtime ? `${recipe.cookingtime.value} ${recipe.cookingtime.unit}` : ''}</span>
								<div className={classes.buttons}>
									<Button
										link={`/cms/recipes/${recipe._id}`}
										type="button"
										classes="secondary naked"
										eventClick={(e) => console.log('details')}
										label="details"
									/>
									<Button
										type="button"
										classes="secondary naked"
										eventClick={(e) => console.log('edit')}
										label="edit"
									/>
									<Button
										type="button"
										classes="danger naked"
										eventClick={(e) => console.log('remove')}
										label="remove"
									/>
								</div>
							</li>
						))
					}
				</ul>
			</div>
		) : ''
	);
}

export default Recipes;
