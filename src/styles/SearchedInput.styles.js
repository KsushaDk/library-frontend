import { createUseStyles } from 'react-jss';
import { colors, btn, typography } from './constants.styles';

export const searchInputStyles = () => ({
	search: {
		width: '80%',
		position: 'relative',
		display: 'flex',
		'& input': {
			width: '80%',
			padding: '13px 0 13px 10%',
			border: 'none',
			borderRadius: '8px',
			...typography.placeholder,
			color: `${colors.secondaryGray}`,
			outline: 'none',
		},
		'& button': {
			...btn,
			...typography.btn,
			background: `${colors.primaryOrange}`,
			padding: '1%',
			width: '20%',
		},
	},
	search_i: {
		width: '18px',
		height: '18px',
		position: 'absolute',
		top: '32%',
		left: '3%',
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'contain',
	},

	'@media (max-width: 768px)': {
		search: {
			width: '100%',
		},
	},

	'@media (max-width: 450px)': {
		search: {
			width: '100%',
		},
	},
});

export default createUseStyles(searchInputStyles, { name: 'SearchInput' });
