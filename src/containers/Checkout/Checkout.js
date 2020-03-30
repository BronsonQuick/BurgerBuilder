import React from 'react';
import { Component } from 'react';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import { Route, Redirect } from 'react-router-dom';
import ContactData from '../Checkout/ContactData/ContactData';
import { connect } from 'react-redux';

function Checkout (props) {
	const checkoutCancelledHander = () => {
		props.history.goBack();
	}
	const checkoutPurchasedHandler = () => {
		props.history.replace('/checkout/contact-data');
	}
	let summary = <Redirect to="/" />
	if (props.ings) {
		const purchasedRedirect = props.purchase ? <Redirect to="/" /> : null;
		summary = (
			<React.Fragment>
				{purchasedRedirect}
				<CheckoutSummary
					ingredients={props.ings}
					purchaseCancelled={checkoutCancelledHander}
					purchaseContinued={checkoutPurchasedHandler}
					/>
				<Route
					path={props.match.url + '/contact-data'}
					component={ContactData}/>
			</React.Fragment>
		);
	}
	return (
		<React.Fragment>
			{summary}
		</React.Fragment>
	);
}

const mapStateToProps = state => {
	return {
		ings: state.burgerBuilder.ingredients,
		purchase: state.order.purchase
	};
}

export default connect(mapStateToProps)(Checkout);
