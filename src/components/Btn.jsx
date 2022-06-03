import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import useStyles from '../styles/Btn.styles';

export const Btn = (props) => {
	const classes = useStyles();
	const { btnValue, onClick } = props;

	return (
		<button className={classes.btn} type="button" onClick={onClick}>
			<Link to="/">{btnValue}</Link>
		</button>
	);
};

Btn.propTypes = {
	btnValue: PropTypes.string.isRequired,
	onClick: PropTypes.func.isRequired,
};
