import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import useStyles from '../styles/BookItem.styles';

import { BookStatus } from './BookStatus';

export const BookItem = ({ book }) => {
	const classes = useStyles();

	return (
		<div className={classes.books__list_item}>
			<div className={classes.books__list_item_img}>
				<Link to={`/books/${book.id}`}>
					<img src={book.imageUrl} alt={book.name} />
				</Link>
			</div>
			<div className={classes.books__list_item_info}>
				<BookStatus />
				<Link to={`/books/${book.id}`}>
					<div className={classes.books__list_item_about}>
						<p>{book.name}</p>
						<span>
							by &nbsp;
							{book.author}
						</span>
						<br />
						<span> {`Released in ${book.released}`}</span>
					</div>
				</Link>
				<div className={classes.books__list_btn_group}>
					<button type="button">Reserve</button>
					<button type="button">Take</button>
				</div>
			</div>
		</div>
	);
};

BookItem.propTypes = {
	book: PropTypes.shape({
		author: PropTypes.string,
		description: PropTypes.string,
		id: PropTypes.string,
		imageUrl: PropTypes.string,
		length: PropTypes.string,
		name: PropTypes.string,
		released: PropTypes.string,
	}).isRequired,
};
