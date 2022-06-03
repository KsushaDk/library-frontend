import React from 'react';
import useStyles from '../styles/Footer.styles';
import inst from '../assets/images/inst.svg';
import gh from '../assets/images/github.png';
import li from '../assets/images/li.png';

export const Footer = () => {
	const classes = useStyles();
	return (
		<div className={classes.footer}>
			<div className={classes.footer__info}>
				<ul>
					<li>
						<span>About </span>
					</li>
					<li>
						<a href="/">About us</a>
					</li>
					<li>
						<a href="/">Privacy&Security</a>
					</li>
				</ul>
				<ul>
					<li>
						<span>Help</span>
					</li>
					<li>
						<a href="/">Help center</a>
					</li>
					<li>
						<a href="/">FAQs</a>
					</li>
				</ul>
			</div>

			<div className={classes.footer_contacts}>
				<ul>
					<li>
						<span>Stay connected</span>
					</li>
					<li>
						<div>
							<a href="https://www.instagram.com/">
								<img className={classes.footer_icon} src={inst} alt="inst" />
							</a>

							<a href="https://github.com/KsushaDk">
								<img className={classes.footer_icon} src={gh} alt="gh" />
							</a>

							<a href="www.linkedin.com/in/ksushadisko">
								<img className={classes.footer_icon} src={li} alt="gh" />
							</a>
						</div>
					</li>
				</ul>
			</div>
		</div>
	);
};
