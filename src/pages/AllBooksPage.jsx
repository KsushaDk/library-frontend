import React, { useState, useCallback, useEffect } from 'react';
import useStyles from '../styles/AllBooksPage.styles';

import { BookItem } from '../components/BookItem';

export const AllBooksPage = () => {
	const classes = useStyles();

	const [isShown, setShown] = useState(false);
	const [allBooks, setAllBooks] = useState([]);

	const handleClick = useCallback(() => {
		setShown((prevState) => !prevState);
	}, []);

	useEffect(() => {
		fetch('https://fox-library-api.herokuapp.com/api/library')
			.then((response) => response.json())
			.then((data) => setAllBooks(data))
			.catch((err) => console.log(err));
	}, []);

	const numberQuantity = isShown ? allBooks.length : 8;

	return (
		<div className={classes.books}>
			<div className={classes.books__list}>
				<h3 className={classes.books__list_title}>All books</h3>
				<div className={classes.books__list_items}>
					{allBooks.length !== 0 &&
						allBooks
							.slice(0, numberQuantity)
							.map((book) => <BookItem book={book} key={book.id} />)}
				</div>
				{!isShown && (
					<button
						className={classes.books__list_btn_show}
						type="button"
						onClick={handleClick}
					>
						Show more
					</button>
				)}
			</div>
		</div>
	);
};
