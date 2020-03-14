import React from 'react';
import { Component } from 'react';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import { Route, Redirect } from 'react-router-dom';
import ContactData from '../Checkout/ContactData/ContactData';
import { connect } from 'react-redux';
import * as actionTypes from '../../store/actions/actionTypes';

class Checkout extends Component {
	checkoutCancelledHander = () => {
		this.props.history.goBack();
	}
	checkoutPurchasedHandler = () => {
		this.props.history.replace('/checkout/contact-data');
	}
	render() {
		let summary = <Redirect to="/" />
		if (this.props.ings) {
			const purchasedRedirect = this.props.purchased ? <Redirect to="/" /> : null;
			summary = (
				<React.Fragment>
					{purchasedRedirect}
					<CheckoutSummary
						ingredients={this.props.ings}
						purchaseCancelled={this.checkoutCancelledHander}
						purchaseContinued={this.checkoutPurchasedHandler}
						/>
					<Route
						path={this.props.match.url + '/contact-data'}
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
}

const mapStateToProps = state => {
	return {
		ings: state.burgerBuilder.ingredients,
		purchased: state.order.purchased
	};
}

export default connect(mapStateToProps)(Checkout);
