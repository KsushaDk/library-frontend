import { createUseStyles } from 'react-jss';
import { colors, typography } from './constants.styles';

export const userOrdersPageStyles = () => ({
	user: {
		padding: '3% 2%',
		minHeight: 'calc(100vh - 205px)',
		display: 'flex',
		justifyContent: 'space-between',
		flexDirection: 'column',
		background: `${colors.mainBg}`,
		'& a': {
			textDecoration: 'none',
		},
	},
	user__list: {
		width: '100%',
		minHeight: '300px',
		padding: '2%',
		marginBottom: '3%',
		borderRadius: '16px',
		background: `${colors.generalWhite}`,
	},
	user__list_title: {
		...typography.h3,
		color: `${colors.generalRed}`,
	},
	user__list_info: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		marginTop: '3%',
		flexWrap: 'wrap',
		columnGap: '10px',
		'& span': {
			...typography.h2,
			fontWeight: '600',
			color: `${colors.secondaryGray}`,
		},
	},
});

export default createUseStyles(userOrdersPageStyles, {
	name: 'UserOrdersPage',
});
