import { createUseStyles } from 'react-jss';
import { colors, btn, typography } from './constants.styles';

export const btnStyles = () => ({
	btn: {
		width: '100%',
		height: '44px',
		marginTop: '10%',
		backgroundColor: `${colors.generalOrange}`,
		...btn,
		'& a': {
			...typography.btn,
			textDecoration: 'none',
			color: `${colors.generalWhite}`,
		},
		'&:hover': {
			opacity: 0.7,
		},
	},
});

export default createUseStyles(btnStyles, { name: 'Btn' });
