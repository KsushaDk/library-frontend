import { createUseStyles } from 'react-jss';
import { colors, btn, typography } from './constants.styles';

export const bookItemStyles = () => ({
	books__list_item: {
		width: '22%',
		minWidth: '300px',
		height: 'auto',
		display: 'flex',
		justifyContent: 'space-between',
		marginBottom: '3%',
	},
	books__list_item_img: {
		width: '47%',
		height: '100%',
		backgroundSize: 'cover',
		overflow: 'hidden',
		'& img': {
			width: '100%',
			height: '100%',
			borderRadius: '8px',
		},
		'&:hover': {
			opacity: 0.7,
		},
	},
	books__list_item_info: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-between',
		width: '50%',
		height: '100%',
	},
	books__list_item_about: {
		'& p': {
			whiteSpace: 'nowrap',
			overflow: 'hidden',
			textOverflow: 'ellipsis',
			paddingBottom: '10%',
			...typography.about,
			color: `${colors.generalRed}`,
			'&:hover': {
				opacity: 0.7,
			},
		},
		'& span': {
			paddingBottom: '3%',
			...typography.a,
			fontWeight: 'normal',
			color: `${colors.generalRed}`,
			'&:hover': {
				opacity: 0.7,
			},
		},
	},
	books__list_btn_group: {
		display: 'flex',
		flexDirection: 'column',
		rowGap: '10px',
		'& button': {
			width: '100%',
			padding: '3%',
			textAlign: 'center',
			...typography.a,
			fontWeight: 'normal',
			color: `${colors.generalWhite}`,
			backgroundColor: `${colors.secondaryGray}`,
			...btn,
			outline: 'none',
		},
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
});

export default createUseStyles(bookItemStyles, { name: 'BookItem' });
