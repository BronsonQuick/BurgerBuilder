import React from 'react';
import { Component } from 'react';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import { Route } from 'react-router-dom';
import ContactData from '../Checkout/ContactData/ContactData';
import { connect } from 'react-redux';

class Checkout extends Component {
	checkoutCancelledHander = () => {
		this.props.history.goBack();
	}
	checkoutPurchasedHandler = () => {
		this.props.history.replace('/checkout/contact-data');
	}
	render() {
		return (
			<React.Fragment>
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
}

const mapStateToProps = state => {
	return {
		ings: state.ingredients
	};
}

export default connect(mapStateToProps)(Checkout);
