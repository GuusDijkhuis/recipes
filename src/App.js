import React from 'react';

import Cms from './components/pages/CMS';
import Home from './components/pages/Home';
import Recipes from './components/pages/Recipes';
import About from './components/pages/About';

import {
	Switch,
	Route
} from "react-router-dom";

export default function App() {
	return (
		<div>
			<Switch>
				<Route exact path="/recipes" component={ () => <Recipes/> } />
				<Route exact path="/about-us"  component={ () => <About /> } />
				<Route exact path="/cms" component={ () => <Cms /> } />
				<Route exact path="/" component={ () => <Home /> } />
			</Switch>
		</div>
	);
}