import React, { useState } from "react";
import Input from '../../../components/UI/Input/Input';
import Button from '../../../components/UI/Button/Button';
import Spinner from '../../../components/UI/Spinner/Spinner';
import axios from '../../../routes/axios-orders';
import withErrorHandler from '../../../hoc/withErrorHandler/withErrorHandler';
import { connect } from 'react-redux';
import styles from './ContactData.module.css';
import * as actions from '../../../store/actions/index';

function ContactData(props) {
	const [orderForm, setOrderForm ] = useState({
			name: {
				elementType: 'input',
				elementConfig: {
					type: 'text',
					placeholder: 'Your Name'
				},
				value: ''
			},
			street: {
				elementType: 'input',
				elementConfig: {
					type: 'text',
					placeholder: 'Street'
				},
				value: ''
			},
			zipCode: {
				elementType: 'input',
				elementConfig: {
					type: 'text',
					placeholder: 'Postcode'
				},
				value: ''
			},
			country: {
				elementType: 'input',
				elementConfig: {
					type: 'text',
					placeholder: 'Your Country'
				},
				value: ''
			},
			email: {
				elementType: 'input',
				elementConfig: {
					type: 'email',
					placeholder: 'Your Email'
				},
				value: ''
			},
			deliveryMethod: {
				elementType: 'select',
				elementConfig: {
					options: [
						{value: 'fastest', displayValue: 'Fastest'},
						{value: 'cheapest', displayValue: 'Cheapest'},
					]
				},
				value: 'fastest'
		}
	});
	const orderHandler = (event) => {
		event.preventDefault();
		const formData = {};
		for ( let formElementIdentifier in orderForm ) {
			formData[formElementIdentifier] = orderForm[formElementIdentifier].value;
		}

		const order = {
			ingredients: props.ings,
			price: props.price,
			orderData: formData,
			userId: props.userId
		}

		props.onOrderBurger(order, props.token);
	}
	const inputChangedHandler = (event, inputIdentifier) => {
		const updatedOrderForm = {
			...orderForm
		}
		const updatedFormElement = {
			...updatedOrderForm[inputIdentifier]
		}
		updatedFormElement.value = event.target.value;
		updatedOrderForm[inputIdentifier] = updatedFormElement;
		setOrderForm(updatedOrderForm);
	}
	const formElementsArray = [];
	for ( let key in orderForm ) {
		formElementsArray.push({
			id: key,
			config: orderForm[key]
		});
	}
	let form = (
		<form>
				{formElementsArray.map( formElement => (
					<Input
						key={formElement.id}
						elementType={formElement.config.elementType}
						elementConfig={formElement.config.elementConfig}
						value={formElement.config.value}
						changed={(event) => inputChangedHandler(event, formElement.id)} />
				))}
				<Button btnType="Success" clicked={orderHandler}>Order</Button>
			</form>
	);
	if (props.loading) {
		form = <Spinner />;
	}
	return(
		<div className={styles.ContactData} >
			<h4>Enter your contact data</h4>
			{form}
		</div>
	);
}

const mapDispatchToProps = dispatch => {
	return {
		onOrderBurger: (orderData, token ) => dispatch(actions.purchaseBurger(orderData, token))
	}
}

const mapStateToProps = state => {
	return {
		ings: state.burgerBuilder.ingredients,
		price: state.burgerBuilder.totalPrice,
		loading: state.order.loading,
		token: state.auth.token,
		userId: state.auth.userId
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(ContactData, axios));
