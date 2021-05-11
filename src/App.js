import React from 'react';

import Cms from './components/pages/CMS';
import Recipe from './components/pages/Recipe';
import Recipes from './components/pages/Recipes';

import {
	Switch,
	Route
} from "react-router-dom";

export default function App() {
	return (
		<div>
			<Switch>
				<Route exact path="/recipes/:id" component={ () => <Recipe /> } />
				<Route exact path="/cms" component={ () => <Cms /> } />
				<Route exact path="/cms/add-recipe" component={ () => <Cms /> } />
				<Route exact path="/cms/recipes" component={ () => <Cms /> } />
				<Route exact path="/cms/recipes/:id" component={ () => <Cms /> } />
				<Route exact path="/cms/recipes/edit/:id"  component={ () => <Cms /> } />
				<Route exact path="/" component={ () => <Recipes /> } />
			</Switch>
		</div>
	);
}