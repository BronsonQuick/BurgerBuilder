import React from 'react';
import { Component } from 'react';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import { Route } from 'react-router-dom';
import ContactData from '../Checkout/ContactData/ContactData';

class Checkout extends Component {
	state = {
		ingredients: null,
		price: 0
	}
	componentWillMount() {
		const query = new URLSearchParams(this.props.location.search);
		const ingredients = {};
		let price = null;
		for ( let param of query.entries() ) {
			if ( param[0] === 'price' ) {
				price = param[1];
			} else {
				ingredients[param[0]] = +param[1];
			}
		}
		this.setState({ingredients: ingredients, totalPrice: price });
	}
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
					ingredients={this.state.ingredients}
					purchaseCancelled={this.checkoutCancelledHander}
					purchaseContinued={this.checkoutPurchasedHandler}
					/>
				<Route
					path={this.props.match.url + '/contact-data'}
					render={(props) => (<ContactData ingredients={this.state.ingredients} price={this.state.totalPrice} {...props} />)}
					/>
			</React.Fragment>
		);
	}
}

export default Checkout;
