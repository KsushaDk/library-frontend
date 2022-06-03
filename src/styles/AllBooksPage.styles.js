import { createUseStyles } from 'react-jss';
import { colors, btn, typography } from './constants.styles';

export const allBooksPageStyles = () => ({
	books: {
		padding: '3% 2%',
		background: `${colors.mainBg}`,
		minHeight: 'calc(100vh - 205px)',
		'& a': {
			textDecoration: 'none',
		},
	},
	books__list: {
		display: 'flex',
		flexDirection: 'column',
		borderRadius: '16px',
		background: `${colors.generalWhite}`,
		padding: '2% 1%',
	},
	books__list_title: {
		paddingBottom: '20px',
		...typography.h3,
		color: `${colors.generalRed}`,
	},
	books__list_items: {
		display: 'flex',
		justifyContent: 'space-between',
		flexWrap: 'wrap',
		alignContent: 'flex-start',
		gap: '2%',
	},
	books__list_btn_show: {
		alignSelf: 'center',
		marginTop: '36px',
		width: '185px',
		height: '48px',
		...typography.label,
		fontWeight: 'normal',
		color: `${colors.generalWhite}`,
		backgroundColor: `${colors.generalOrange}`,
		...btn,
	},

	'@media (max-width: 768px)': {
		books: {
			minHeight: 'calc(100vh - 300px)',
		},
	},

	'@media (max-width: 450px)': {
		books: {
			minHeight: 'calc(100vh - 500px)',
		},
	},
});

export default createUseStyles(allBooksPageStyles, { name: 'AppBooksPage' });
