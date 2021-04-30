import React from 'react';

import Nav from './Nav';
import AddRecipe from './AddRecipe';

import '../../../globals.css';
import classes from './index.module.css';

const Cms = () => {
	return (
		<div className={classes.cms}>
			<Nav />
			<AddRecipe />
		</div>
	);
}

export default Cms;
