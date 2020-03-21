import React from 'react';
import NavigationItem from '../NavigationItems/NavigationItem/NavigationItem';
import classes from './NavigationItems.module.css';

const navigationItems = (props) => (
	<ul className={classes.NavigationItems}>
		<NavigationItem link="/">Burger Builder</NavigationItem>
		{props.isAuthenticated
			? (
				<React.Fragment>
					<NavigationItem link="/orders">Orders</NavigationItem>
					<NavigationItem link="/logout">Logout</NavigationItem>
				</React.Fragment>
			)
			:  <NavigationItem link="/auth">Login</NavigationItem>
		}
	</ul>
);

export default navigationItems;
