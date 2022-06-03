import React from 'react';

import useStyles from '../styles/Form.styles';

import { Btn } from '../components/Btn';
import { FormField } from '../components/FormField';

export const LoginPage = () => {
	const classes = useStyles();

	const labels = ['email', 'password'];

	return (
		<div className={classes.container__log}>
			<div className={classes.modal}>
				<div className={classes.close} />
				<h2 className={classes.title}>Log In to Liba</h2>
				<form className={classes.form}>
					{labels.map((label) => (
						<FormField value={label} key={label} />
					))}

					<Btn btnValue="Log In" />
				</form>
			</div>
		</div>
	);
};
