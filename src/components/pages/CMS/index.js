import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import { Switch, Route } from 'react-router-dom'; 

import Nav from './Nav';
import RecipeForm from './RecipeForm';
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
						<Route exact path="/cms/add-recipe" component={ () => <RecipeForm /> } />
						<Route exact path="/cms/recipes"  component={ () => <Recipes /> } />
						<Route exact path="/cms/recipes/:id"  component={ () => <Recipe /> } />
						<Route exact path="/cms/recipes/edit/:currId"  component={ () => <RecipeForm /> } />
					</Switch>
				</div>
			</Router>
		</div>
	);
}

export default Cms;
