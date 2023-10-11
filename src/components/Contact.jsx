import React from 'react';
import classes from './Contact.module.scss';

const Contact = () => {

	return (
		<div className={classes.container}>
			<h1 className={classes.toptext}>Need to get in<br></br>touch with us?</h1>
			<div className={classes.main}>
				<div className={classes.sub}>
					<h2>Call or text us at</h2>
					<h1 className={classes.phonenum}>519-123-456</h1>
				</div>
				<div className={classes.sub}>
					<h2>Email us at</h2>
					<p>precisionsandblasting81<br></br>@gmail.com</p>
				</div>
			</div>
		</div>
	);
};

export default Contact;
