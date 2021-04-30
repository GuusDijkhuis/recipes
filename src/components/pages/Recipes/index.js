import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Nav from '../../modules/Nav';
import Card from '../../modules/Card';
import classes from './index.module.css';
import { getAllRecipes } from '../../../actions/recipes';

const Recipes = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getAllRecipes())
	}, [dispatch])

	const recipes = useSelector((state) => state.recipes);
	return (
		<div>
			<Nav />
			<div className={classes.content}>
				<h1>Recepten</h1>
				<ul className={classes.list}>
				{ 
					recipes.length ? recipes.map((recipe) => (
						<Card 
							label={recipe.title}
							tags={[
								`${recipe.personCount} personen`,
								`${recipe.cookingtime.value} ${recipe.cookingtime.unit}` 
							]}
							introduction={recipe.introduction}
							buttonLabel="Lees meer"
						/>
					)) : ''
				}
				</ul>
			</div>
		</div>
	);
}

export default Recipes;