import React from 'react';

import Nav from './components/modules/Nav';
import Cms from './components/CMS';
import Home from './components/pages/Home';
import Recipes from './components/pages/Recipes';
import About from './components/pages/About';

import {
	BrowserRouter as Router,
	Switch,
	Route
} from "react-router-dom";

export default function App() {
	return (
		<div>
			<Nav />
			<Switch>
				<Route exact path="/recipes" component={ ()=> <Recipes/> } />
				<Route exact path="/about-us"  component={ ()=> <About /> } />
				<Route exact path="/cms" component={ () => <Cms /> } />
				<Route exact path="/" component={ () => <Home /> } />
			</Switch>
		</div>
	);
}