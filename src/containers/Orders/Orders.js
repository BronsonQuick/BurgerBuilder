import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Order from '../../components/Order/Order';
import Spinner from '../../components/UI/Spinner/Spinner';
import axios from '../../routes/axios-orders';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import * as actions from '../../store/actions/index';

function Orders(props) {
	const { token, userId } = props;
	useEffect(() => {
		props.onFetchOrders(props.token, props.userId);
	}, [token, userId] );

	let orders = null;

	if ( props.loading ) {
		orders = <Spinner />;
	} else {
		orders = (
			<div>
				{props.orders.map( order => (
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
const mapDispatchToProps = dispatch => {
	return {
		onFetchOrders: (token, userId) => dispatch(actions.fetchOrders(token, userId))
	};
}
const mapStateToProps = state => {
	return {
		orders: state.order.orders,
		loading: state.order.loading,
		token: state.auth.token,
		userId: state.auth.userId
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(Orders, axios));
