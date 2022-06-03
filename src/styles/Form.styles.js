import { createUseStyles } from 'react-jss';
import { colors, typography } from './constants.styles';

export const formStyles = () => ({
	container__log: {
		width: '100%',
		height: '100vh',
		padding: '5%',
		background: `${colors.mainBg}`,
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
	container__adding: {
		width: '100%',
		padding: '3%',
		background: `${colors.mainBg}`,
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
	modal: {
		position: 'relative',
		padding: '4% 3%',
		background: `${colors.generalWhite}`,
		borderRadius: '8px',
	},
	close: {
		position: 'absolute',
		top: '5%',
		right: '5%',
		width: '16px',
		height: '16px',
		backgroundImage: 'url(../assets/images/close.png)',
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'contain',
		'&:hover': {
			opacity: 0.7,
		},
	},
	title: {
		marginBottom: '11%',
		...typography.h2,
		color: `${colors.generalRed}`,
	},
	form: {
		display: 'flex',
		flexDirection: 'column',
	},
	warning: {
		marginTop: '5%',
		...typography.warning,
		color: `${colors.generalRed}`,
	},
	'@media (max-width: 450px)': {
		modal: {
			maxWidth: '310px',
			paddingTop: '7%',
		},
		close: {
			top: '3%',
			right: '3%',
		},
	},
});

export default createUseStyles(formStyles, { name: 'Form' });
