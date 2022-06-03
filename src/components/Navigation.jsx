import React from 'react';
import { Link } from 'react-router-dom';
import useStyles from '../styles/Navigation.styles';

import { SearchInput } from './SearchInput';

export const Navigation = () => {
	const classes = useStyles();

	return (
		<nav className={classes.nav}>
			<div className={classes.nav_group}>
				<h1 className={classes.nav_logo}>
					<Link to="/">Liba</Link>
				</h1>
				<SearchInput />
			</div>
			<div className={classes.nav_login}>
				<Link to="/login">Log In</Link>
				<Link to="/signup">Sign Up</Link>
			</div>
		</nav>
	);
};
