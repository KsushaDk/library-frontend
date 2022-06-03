import React from 'react';
import useStyles from '../styles/SearchedInput.styles';

export const SearchInput = () => {
	const classes = useStyles();

	return (
		<div className={classes.search}>
			<img
				className={classes.search_i}
				src="http://cdn.onlinewebfonts.com/svg/img_456268.png"
				alt="i"
			/>
			<input
				type="text"
				name="search"
				placeholder="Search by author, title, name or year"
			/>
			<button type="button">Search</button>
		</div>
	);
};
