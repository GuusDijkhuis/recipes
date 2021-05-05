import React from 'react';
import { useParams } from 'react-router-dom';
import classes from './index.module.css';

const Recipes = () => {
	const { id } = useParams();
	return (
		<div className={classes.container}>
			<h1>Recipe: {id} </h1>
		</div>
	);
}

export default Recipes;
