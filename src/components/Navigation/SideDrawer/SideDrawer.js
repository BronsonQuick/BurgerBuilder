import React from 'react';
import Logo from '../../Logo/Logo';
import NagivationItems from '../NavigationItems/NavigationItems';
import Backdrop from '../../UI/Backdrop/Backdrop';

import classes from '../SideDrawer/SideDrawer.module.css';

const sideDrawer = (props) => {
	let attachedClasses = [classes.SideDrawer, classes.Close];
	if (props.open) {
		attachedClasses = [classes.SideDrawer, classes.Open]
	}
	return(
		<React.Fragment>
			<Backdrop show={props.open} clicked={props.closed}/>
			<div className={attachedClasses.join(' ')} onClick={props.closed}>
				<div className={classes.Logo}>
					<Logo />
				</div>
				<nav>
					<NagivationItems isAuthenticated={props.isAuth} />
				</nav>
			</div>
		</React.Fragment>
	);
};
export default sideDrawer;
