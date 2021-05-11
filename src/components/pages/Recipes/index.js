import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import Nav from '../../modules/Nav';
import Card from '../../modules/Card';
import classes from './index.module.css';
import { getAllRecipes } from '../../../actions/recipes';

const Recipes = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getAllRecipes())
	}, [dispatch])

	let recipes = useSelector((state) => state.recipes);
	return (
		recipes ? (
			<div>
				<Nav />
				<div className={classes.content}>
					<h1>Recepten</h1>
					<ul className={classes.list}>
					{ 
						recipes.length ? recipes.map((recipe) => (
							<Card 
								key={uuidv4()}
								id={recipe._id}
								imageUrl={recipe.request ? recipe.request.url : null}
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
		) :''
	);
}

export default Recipes;