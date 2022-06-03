import { createUseStyles } from 'react-jss';
import { colors, typography } from './constants.styles';

export const formFieldStyles = () => ({
	form__field: {
		...typography.label,
		color: `${colors.primaryGray}`,
		marginBottom: '6%',
		'& input': {
			width: '100%',
			height: '44px',
			marginTop: '2%',
			paddingLeft: '16px',
			...typography.input,
			border: `1px solid ${colors.secondaryGray}`,
			borderRadius: '8px',
		},
	},
	'@media (max-width: 450px)': {
		login__field: {
			maxWidth: '310px',
			paddingTop: '7%',
		},
	},
});

export default createUseStyles(formFieldStyles, { name: 'FormField' });
