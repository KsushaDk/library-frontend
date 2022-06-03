import { createUseStyles } from 'react-jss';
import { colors, btn, typography } from './constants.styles';

export const bookPageStyles = () => ({
	book: {
		padding: '3% 2%',
		background: `${colors.mainBg}`,
		minHeight: 'calc(100vh - 205px)',
	},
	book__info: {
		display: 'flex',
		justifyContent: 'space-between',
		columnGap: '30px',
		width: '100%',
		padding: '2%',
		borderRadius: '16px',
		background: `${colors.generalWhite}`,
	},
	book__info_img: {
		width: '300px',
		height: '455px',
		backgroundSize: 'cover',
		backgroundRepeat: 'no-repeat',
		border: `1px solid ${colors.secondaryGray}`,
		borderRadius: '8px',
		'&:hover': {
			opacity: 0.7,
		},
	},
	book__info_description: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-between',
		marginLeft: '2%',
		height: '100%',
	},

	book__info_common: {
		'& h4': {
			paddingBottom: '3%',
			...typography.h4,
			color: `${colors.generalRed}`,
		},
		'& p': {
			paddingBottom: '3%',
			...typography.h2,
			color: `${colors.generalOrange}`,
		},
		'& span': {
			...typography.input,
			fontWeight: 'normal',
			color: `${colors.primaryGray}`,
		},
	},
	book__info_btn_group: {
		display: 'flex',
		justifyContent: 'space-between',
		flexWrap: 'wrap',
		gap: '10px',
		marginTop: '5%',
		width: '40%',
		'& button': {
			padding: '3% 5%',
			width: '45%',
			minWidth: '100px',
			...typography.btn,
			color: `${colors.generalWhite}`,
			backgroundColor: `${colors.generalOrange}`,
			...btn,
		},
	},
	book__info_about: {
		marginTop: '5%',
		color: `${colors.generalRed}`,
		'& h3': {
			...typography.p,
			fontWeight: 'bold',
			marginBottom: '3%',
		},
		'& span': {
			display: 'block',
			...typography.placeholder,
		},
	},
	btn__show_more: {
		width: '150px',
		height: '36px',
		background: `${colors.secondaryGray}`,
		...btn,
		...typography.a,
		textAlign: 'center',
		color: `${colors.generalWhite}`,
		marginTop: '3%',
	},
	'@media (max-width: 768px)': {
		book: {
			minHeight: 'calc(100vh - 300px)',
		},
		book__info: {
			flexDirection: 'column',
		},
		book__info_img: {
			width: '100%',
			height: 'auto',
		},
		book__info_description: {
			width: '100%',
			marginTop: '3%',
		},
	},
	'@media (max-width: 450px)': {
		minHeight: 'calc(100vh - 500px)',
	},
});

export default createUseStyles(bookPageStyles, { name: 'BookPage' });
