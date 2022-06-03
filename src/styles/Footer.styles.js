import { createUseStyles } from 'react-jss';
import { colors, typography } from './constants.styles';

export const footerStyles = () => ({
	footer: {
		height: '205px',
		width: '100%',
		padding: '3% 4%',
		background: `${colors.primaryOrange}`,
		display: 'flex',
		justifyContent: 'space-between',
	},
	footer__info: {
		display: 'flex',
		justifyContent: 'space-between',
		width: '50%',
		'& ul': {
			listStyle: 'inside',
			minWidth: '150px',
			'& li': {
				marginBottom: '8px',
				'&:first-child': {
					listStyleType: 'none',
					marginBottom: '15%',
				},
				'& span': {
					...typography.input,
					fontWeight: 'bold',
					color: `${colors.generalRed}`,
				},
				'& a': {
					...typography.placeholder,
					textDecoration: 'none',
					color: `${colors.generalRed}`,
					'&:hover': {
						opacity: 0.7,
					},
				},
			},
		},
	},
	footer_contacts: {
		display: 'flex',
		'& ul': {
			listStyleType: 'none',
			padding: 0,
			margin: 0,
			'& li': {
				marginBottom: '8px',
				'& span': {
					...typography.input,
					fontWeight: 'bold',
					color: `${colors.generalRed}`,
				},
				'& div': {
					display: 'flex',
					justifyContent: 'space-around',
					'&:hover': {
						opacity: 0.7,
					},
				},
				'&:first-child': {
					marginBottom: '20px',
				},
			},
		},
	},
	footer_icon: {
		width: '30px',
		height: '30px',
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'contain',
	},
	'@media (max-width: 768px)': {
		footer: {
			flexDirection: 'column',
			height: '300px',
		},
		footer__info: {
			width: '100%',
			'& ul': {
				minWidth: '100px',
				marginTop: '3%',
			},
		},
		footer_contacts: {
			alignSelf: 'end',
		},
	},
	'@media (max-width: 450px)': {
		footer: {
			flexDirection: 'row',
			height: '500px',
		},
		footer__info: {
			flexDirection: 'column',
			'& ul': {
				minWidth: '50px',
			},
		},
		footer_contacts: {
			marginTop: '5%',
			alignSelf: 'start',
		},
	},
});

export default createUseStyles(footerStyles, { name: 'Footer' });
