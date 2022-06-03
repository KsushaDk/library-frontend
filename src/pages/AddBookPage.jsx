import React from 'react';
import useStyles from '../styles/Form.styles';

import { FormField } from '../components/FormField';
import { Btn } from '../components/Btn';

export const AddBookPage = () => {
	const classes = useStyles();

	// const [state, setState] = useState({
	// 	name: name,
	// 	author: author,
	// 	pages: pages,
	// 	year: year,
	// 	description: description,
	//     quantity: quantity,
	//     comments: comments,

	// });

	// const handleChange = useCallback(
	// 	(key) => (event) => {
	// 		event.preventDefault();
	// 		setState((prevState) => ({ ...prevState, [key]: event.target.value }));
	// 	},
	// 	[]
	// );

	const labels = [
		'title',
		'author',
		'pages',
		'year',
		'description',
		'quantity',
		'file',
	];

	return (
		<div className={classes.container__adding}>
			<div className={classes.modal}>
				<h3 className={classes.title}>Add Book</h3>
				<form className={classes.form}>
					{labels.map((label) => (
						<FormField value={label} key={label} />
					))}

					<Btn btnValue="Save" />
				</form>
			</div>
		</div>
	);
};
