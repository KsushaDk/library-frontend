import { createUseStyles } from 'react-jss';
import { colors, typography } from './constants.styles';

export const bookStatusStyles = () => ({
	books__list_item_status: {
		padding: '1% 3%',
		textAlign: 'center',
		...typography.a,
		color: `${colors.generalRed}`,
		background: `${colors.generalWhite}`,
		border: `2px solid ${colors.primaryOrange}`,
		borderRadius: '8px',
	},
});

export default createUseStyles(bookStatusStyles, { name: 'BookStatus' });
