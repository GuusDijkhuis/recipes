import React from 'react';

import { Link } from "react-router-dom";

import classes from './index.module.css';

const Nav = () => {
	return (
		<nav className={classes.nav}>
			<h1>CMS</h1>
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
