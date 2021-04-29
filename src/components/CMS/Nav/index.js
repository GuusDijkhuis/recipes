import React from 'react';

import {
	BrowserRouter as Router,
	Link
} from "react-router-dom";

import classes from './index.module.css';

const Nav = () => {
	return (
		<Router>
			<nav className={classes.nav}>
				<h1>CMS</h1>
				<ul>
					<Link to="/cms/add-recipe">
						<li>
							Add recipe
						</li>
					</Link>
					<Link to="/cms/recipes">
						<li>
							Recipes
						</li>
					</Link>
				</ul>
			</nav>
		</Router>
	);
}

export default Nav;
