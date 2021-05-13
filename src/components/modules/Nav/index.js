import React from 'react';

import { Link } from "react-router-dom";

import classes from './index.module.css';

const Nav = () => {
	return (
		<nav className={classes.nav}>
			<ul>
				<Link to="/home">
					<li>
						Home
					</li>
				</Link>
				<Link to="/cms">
					<li>
						Login
					</li>
				</Link>
			</ul>
		</nav>
	);
}

export default Nav;
