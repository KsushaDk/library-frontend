import React from 'react';
import useStyles from '../styles/UserOrdersPage.styles';

export const UserOrdersPage = () => {
	const classes = useStyles();

	return (
		<div className={classes.user}>
			<div className={classes.user__list}>
				<h3 className={classes.user__list_title}>Reserved books</h3>
				<div className={classes.user__list_info}>
					<span>Oops! You haven&apos;t reserved any book yet</span>
				</div>
			</div>
			<div className={classes.user__list}>
				<h3 className={classes.user__list_title}>Taken books</h3>
				<div className={classes.user__list_info}>
					<span>Oops! You haven&apos;t taken any book yet </span>
				</div>
			</div>
		</div>
	);
};
