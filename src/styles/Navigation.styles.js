import { createUseStyles } from 'react-jss';
import { colors, typography } from './constants.styles';

export const navigationStyles = () => ({
	nav: {
		display: 'flex',
		justifyContent: 'space-between',
		background: `${colors.generalRed}`,
		padding: '2%',
		'& a': {
			textDecoration: 'none',
		},
	},
	nav_group: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		width: '70%',
	},
	nav_logo: {
		'& a': {
			...typography.h1,
			color: colors.generalOrange,
		},
	},
	nav_login: {
		display: 'flex',
		justifyContent: 'space-around',
		alignItems: 'center',
		width: '20%',
		'& a': {
			...typography.h3,
			color: `${colors.primaryOrange}`,
			'&:hover': {
				opacity: 0.7,
			},

			'&:focus': {
				color: `${colors.generalOrange}`,
			},
		},
	},

	'@media (max-width: 768px)': {
		nav: {
			flexDirection: 'column',
		},
		nav_group: {
			width: '100%',
			marginBottom: '2%',
		},
		nav_logo: {
			marginRight: '3%',
		},
		nav_login: {
			width: '30%',
			justifyContent: 'space-between',
		},
	},

	'@media (max-width: 450px)': {
		nav_group: {
			flexDirection: 'column',
		},
	},
});

export default createUseStyles(navigationStyles, { name: 'Navigation' });
