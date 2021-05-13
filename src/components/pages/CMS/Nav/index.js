import React from 'react';

import { Link } from "react-router-dom";

import classes from './index.module.css';

const Nav = () => {
	return (
		<nav className={classes.nav}>
			<a href="http://localhost:3000">
				<h1>CMS</h1>
			</a>
			<ul>
				<Link to="/cms/recipes">
					<li>
						Recipes
					</li>
				</Link>
				<Link to="/cms/add-recipe">
					<li>
						Add recipe
					</li>
				</Link>
			</ul>
		</nav>
	);
}

export default Nav;
