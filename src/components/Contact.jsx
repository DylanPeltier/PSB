import React from 'react';
import classes from './Contact.module.scss';

const Contact = () => {

	return (
		<div className={classes.container}>
			<div className={classes.text_wrapper}>
				<h1 className={classes.toptext}>Need to get in touch with us?</h1>
				<h1 className={classes.midtext}>SHOOT  US A CALL OR TEXT</h1>
				<h1 className={classes.number}>(519)-809-1263</h1>
				<h1 className={classes.midtext}>OR EMAIL US AT</h1>
				<h1 className={classes.email}>precisionsandblasting81@gmail.com</h1>
			</div>
		</div>
	);
};

export default Contact;
