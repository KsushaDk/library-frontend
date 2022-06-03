import React, { useCallback, useState } from 'react';
import useStyles from '../styles/BookPage.styles';

import { BookStatus } from '../components/BookStatus';

export const BookPage = () => {
	const classes = useStyles();

	const [isShown, setShown] = useState(false);

	const handleClick = useCallback(() => {
		setShown((prevState) => !prevState);
	}, []);

	const pickedBook = {
		name: 'A promised land',
		author: 'Barack Obama',
		description:
			'<p>A riveting, deeply personal account of history in the making—from the president who inspired us to believe in the power of democracy</p><p>#1 NEW YORK TIMES BESTSELLER • NAACP IMAGE AWARD NOMINEE • NAMED ONE OF THE TEN BEST BOOKS OF THE YEAR BY THE NEW YORK TIMES BOOK REVIEW</p><p>NAMED ONE OF THE BEST BOOKS OF THE YEAR BY The Washington Post • Jennifer Szalai, The New York Times • NPR • The Guardian • Marie Claire</p><p>In the stirring, highly anticipated first volume of his presidential memoirs, Barack Obama tells the story of his improbable odyssey from young man searching for his identity to leader of the free world, describing in strikingly personal detail both his political education and the landmark moments of the first term of his historic presidency—a time of dramatic transformation and turmoil.<br>Obama takes readers on a compelling journey from his earliest political aspirations to the pivotal Iowa caucus victory that demonstrated the power of grassroots activism to the watershed night of November 4, 2008, when he was elected 44th president of the United States, becoming the first African American to hold the nation’s highest office.<br>Reflecting on the presidency, he offers a unique and thoughtful exploration of both the awesome reach and the limits of presidential power, as well as singular insights into the dynamics of U.S. partisan politics and international diplomacy. Obama brings readers inside the Oval Office and the White House Situation Room, and to Moscow, Cairo, Beijing, and points beyond. We are privy to his thoughts as he assembles his cabinet, wrestles with a global financial crisis, takes the measure of Vladimir Putin, overcomes seemingly insurmountable odds to secure passage of the Affordable Care Act, clashes with generals about U.S. strategy in Afghanistan, tackles Wall Street reform, responds to the devastating Deepwater Horizon blowout, and authorizes Operation Neptune’s Spear, which leads to the death of Osama bin Laden.<br>A Promised Land is extraordinarily intimate and introspective—the story of one man’s bet with history, the faith of a community organizer tested on the world stage. Obama is candid about the balancing act of running for office as a Black American, bearing the expectations of a generation buoyed by messages of “hope and change,” and meeting the moral challenges of high-stakes decision-making. He is frank about the forces that opposed him at home and abroad, open about how living in the White House affected his wife and daughters, and unafraid to reveal self-doubt and disappointment. Yet he never wavers from his belief that inside the great, ongoing American experiment, progress is always possible.<br>This beautifully written and powerful book captures Barack Obama’s conviction that democracy is not a gift from on high but something founded on empathy and common understanding and built together, day by day.</p>',
		id: '5cd9a543-e4a3-4aa7-afa7-a78cf716ad9d',
		imageUrl:
			'https://res.cloudinary.com/intellectfox/image/upload/v1619686603/Diploma%20Front-end/Fox%20library/A%20promised%20land.jpg',
		length: '768 pages',
		released: '2020',
	};

	const aboutBook = pickedBook.description.split(/<[^<>]+>/gi);

	const pQuantity = isShown ? aboutBook.length : 6;

	return (
		<div className={classes.book}>
			<div className={classes.book__info}>
				<img
					className={classes.book__info_img}
					src={pickedBook.imageUrl}
					alt={pickedBook.name}
				/>

				<div className={classes.book__info_description}>
					<div className={classes.book__info_common}>
						<BookStatus />
						<h4>{pickedBook.name}</h4>
						<p>{pickedBook.author}</p>
						<span>
							{`${pickedBook.length}, released in ${pickedBook.released}`}
						</span>
					</div>
					<div className={classes.book__info_btn_group}>
						<button type="button">Reserve</button>
						<button type="button">Take</button>
					</div>
					<div className={classes.book__info_about}>
						<h3>About book</h3>
						<p>
							{aboutBook.slice(0, pQuantity).map((p) => (
								<span key={Math.random()}>{`${p}`} &nbsp;</span>
							))}
						</p>
					</div>
					{!isShown && (
						<button
							className={classes.btn__show_more}
							type="button"
							onClick={handleClick}
						>
							Show more
						</button>
					)}
				</div>
			</div>
		</div>
	);
};
