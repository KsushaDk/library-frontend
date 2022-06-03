import React from 'react';
import useStyles from '../styles/AllBooksPage.styles';

export const SearchedBooksPage = () => {
	const classes = useStyles();

	return (
		<div className={classes.books}>
			<h3 className={classes.books__list_title}>
				Sorry, we don&apos;t find anything ...
			</h3>
		</div>
	);
};
