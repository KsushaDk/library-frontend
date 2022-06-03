import React from 'react';
// import PropTypes from 'prop-types';
import useStyles from '../styles/BookStatus.styles';

export const BookStatus = () => {
	const classes = useStyles();

	return (
		<input
			type="button"
			className={classes.books__list_item_status}
			value="Available"
		/>
	);
};

// BookStatus.propTypes = {
// 	status: PropTypes.string.isRequired,
// };
