import React from 'react';
import classes from './About.module.scss';
import '../styles/arrowcss.css';

const About = () => {
	return (
		<div className={classes.page}>
			<div className={classes.section1}>
				<div className={classes.text_wrapper}>
					<h1>RESIDENTIAL</h1>
					<p>We can clean home exteriors, decks, patio furniture, swimming pools, concrete, docks and breakwalls.</p>
				</div>
				<div class="downArrow bounce filter-white">
  					<img width="40" height="40" alt="" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz48c3ZnIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDMyIDMyIiBoZWlnaHQ9IjMycHgiIGlkPSLQodC70L7QuV8xIiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCAzMiAzMiIgd2lkdGg9IjMycHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxwYXRoIGQ9Ik0yNC4yODUsMTEuMjg0TDE2LDE5LjU3MWwtOC4yODUtOC4yODhjLTAuMzk1LTAuMzk1LTEuMDM0LTAuMzk1LTEuNDI5LDAgIGMtMC4zOTQsMC4zOTUtMC4zOTQsMS4wMzUsMCwxLjQzbDguOTk5LDkuMDAybDAsMGwwLDBjMC4zOTQsMC4zOTUsMS4wMzQsMC4zOTUsMS40MjgsMGw4Ljk5OS05LjAwMiAgYzAuMzk0LTAuMzk1LDAuMzk0LTEuMDM2LDAtMS40MzFDMjUuMzE5LDEwLjg4OSwyNC42NzksMTAuODg5LDI0LjI4NSwxMS4yODR6IiBmaWxsPSIjMTIxMzEzIiBpZD0iRXhwYW5kX01vcmUiLz48Zy8+PGcvPjxnLz48Zy8+PGcvPjxnLz48L3N2Zz4=" />
				</div>
			</div>
			<div className={classes.section2}>
				<div className={classes.text_wrapperlg}>
					<h1>AUTOMOTIVE</h1>
					<p>We can remove paint, rust, body filler and powder coating to allow you to finish your project quicker and more efficient then sanding by hand.</p>
				</div>
			</div>
			<div className={classes.section3}>
				<div className={classes.text_wrapper}>
					<h1>COMMERCIAL</h1>
					<p>We can clean building exteriors from graffiti removal, line stripe removal and much more.</p>
				</div>
			</div>
			<div className={classes.section4}>
				<div className={classes.text_wrapper}>
					<h1>FLEETS</h1>
					<p>We can clean and stripe fleet trucks, buses, railroad cars, ships, barges and anti fowl from boats.</p>
				</div>
			</div>
			<div className={classes.section5}>
				<div className={classes.text_wrapperown}>
					<h1>MESSAGE FROM THE OWNER</h1>
					<p>"After years of seeing what a restored car or an old piece of equipment can look like I thought it would be nice to try and be part of that restoration so I have opened a business that cleans and removes rust, dirt, grim and graffiti to start the restoration process. We service from Chatham-Kent to Essex and all surrounding areas.”</p>
				</div>
			</div>
		</div>
	);
};

export default About;
