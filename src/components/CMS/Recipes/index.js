import React from 'react';

import Button from '../../Elements/Button';

import classes from './index.module.css';

const Recipes = () => {
	return (
		<div className={classes.container}>
			<h1>Recipes</h1>
			<ul className={classes.formFieldList}>
				<li className={classes.formFieldListItem}>
					<span>Ingredient</span>
					<span>Quantity</span>
					<span>Unit</span>
				</li>
				<li className={classes.formFieldListItem}>
					<span>komkommer</span>
					<span>2</span>
					<span>stuks</span>
					<Button 
						label="Remove"
						className="remove" 
						type="button"
					/>
				</li>
				<li className={classes.formFieldListItem}>
					<span>tomaten</span>
					<span>6</span>
					<span>stuks</span>
					<Button 
						label="Remove"
						className="remove" 
						type="button"
					/>
				</li>
			</ul>
		</div>
	);
}

export default Recipes;
