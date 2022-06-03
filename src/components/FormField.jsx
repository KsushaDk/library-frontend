import React from 'react';
import PropTypes from 'prop-types';
import useStyles from '../styles/FormField.styles';

export const FormField = (props) => {
	const { value, onChange } = props;
	const classes = useStyles();

	return (
		<label className={classes.form__field} htmlFor={value}>
			{value[0].toUpperCase() + value.slice(1)}
			<input
				type={value}
				id={value}
				name={value}
				// value={value}
				onChange={onChange}
				required
			/>
		</label>
	);
};

FormField.propTypes = {
	value: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
};
