import React from 'react';

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
					<button 
						className={`${classes.button} ${classes.removeButton}`} 
						type="button"
					>
						Remove
					</button>
				</li>
				<li className={classes.formFieldListItem}>
					<span>tomaten</span>
					<span>6</span>
					<span>stuks</span>
					<button 
						className={`${classes.button} ${classes.removeButton}`} 
						type="button"
					>
						Remove
					</button>
				</li>
			</ul>
		</div>
	);
}

export default Recipes;
