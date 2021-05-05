import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import { Switch, Route } from 'react-router-dom'; 

import Nav from './Nav';
import AddRecipe from './AddRecipe';
import Recipes from './Recipes';
import Recipe from './Recipe';

import '../../../globals.css';
import classes from './index.module.css';

const Cms = () => {
	return (
		<div className={classes.cms}>
			<Router>
				<Nav />
				<div className={classes.container}>
					<Switch>
						<Route exact path="/cms/add-recipe" component={ () => <AddRecipe/> } />
						<Route exact path="/cms/recipes"  component={ () => <Recipes /> } />
						<Route exact path="/cms/recipes/:id"  component={ () => <Recipe /> } />
					</Switch>
				</div>
			</Router>
		</div>
	);
}

export default Cms;
