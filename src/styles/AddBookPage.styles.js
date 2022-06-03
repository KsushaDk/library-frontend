import { createUseStyles } from 'react-jss';
import { colors, btn, typography } from './constants.styles';

export const addBookPageStyles = () => ({
	container: {
		padding: '5%',
		background: `${colors.mainBg}`,
	},
	info: {
		margin: '0 auto',
		display: 'flex',
		flexDirection: 'column',
		maxWidth: '394px',
		padding: '2% 3%',
		background: `${colors.generalWhite}`,
	},
	info__title: {
		margin: '0',
		paddingBottom: '40px',
		...typography.h3,
		textAlign: 'center',
		color: `${colors.generalBlack}`,
	},
	info__form: {
		display: 'flex',
		flexDirection: 'column',
	},
	info__btn: {
		width: '122px',
		height: '32px',
		margin: '21px auto',
		...typography.placeholder,
		color: `${colors.generalWhite}`,
		backgroundColor: `${colors.generalRed}`,
		...btn,
	},
	warning: {
		marginTop: '5%',
		...typography.warning,
		color: `${colors.generalRed}`,
	},
});

export default createUseStyles(addBookPageStyles, { name: 'AddBookPage' });
