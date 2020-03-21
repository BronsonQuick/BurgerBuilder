import React, { Component } from 'react';
import { connect } from 'react-redux';
import Order from '../../components/Order/Order';
import Spinner from '../../components/UI/Spinner/Spinner';
import axios from '../../routes/axios-orders';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import * as actions from '../../store/actions/index';

class Orders extends Component {
	componentDidMount() {
		this.props.onFetchOrders(this.props.token);
	}
	render() {
		let orders = null;

		if ( this.props.loading ) {
			orders = <Spinner />;
		} else {
			orders = (
				<div>
					{this.props.orders.map( order => (
						<Order
							key={order.id}
							ingredients={order.ingredients}
							price={order.price}/>
					))}
				</div>
			)
		}
		return orders;
	}
}
const mapDispatchToProps = dispatch => {
	return {
		onFetchOrders: (token) => dispatch(actions.fetchOrders(token))
	};
}
const mapStateToProps = state => {
	return {
		orders: state.order.orders,
		loading: state.order.loading,
		token: state.auth.token
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(Orders, axios));
