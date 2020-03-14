import React, { Component } from "react";
import Input from '../../../components/UI/Input/Input';
import Button from '../../../components/UI/Button/Button';
import Spinner from '../../../components/UI/Spinner/Spinner';
import axios from '../../../routes/axios-orders';
import withErrorHandler from '../../../hoc/withErrorHandler/withErrorHandler';
import { connect } from 'react-redux';
import styles from './ContactData.module.css';
import * as actions from '../../../store/actions/index';

class ContactData extends Component {
	state = {
		orderForm: {
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
		}
	}
	orderHandler = (event) => {
		event.preventDefault();
		const formData = {};
		for ( let formElementIdentifier in this.state.orderForm ) {
			formData[formElementIdentifier] = this.state.orderForm[formElementIdentifier].value;
		}

		const order = {
			ingredients: this.props.ings,
			price: this.props.price,
			orderData: formData
		}

		this.props.onOrderBurger(order);
	}
	inputChangedHandler = (event, inputIdentifier) => {
		const updatedOrderForm = {
			...this.state.orderForm
		}
		const updatedFormElement = {
			...updatedOrderForm[inputIdentifier]
		}
		updatedFormElement.value = event.target.value;
		updatedOrderForm[inputIdentifier] = updatedFormElement;
		this.setState({orderForm: updatedOrderForm })
	}
	render() {
		const formElementsArray = [];
		for ( let key in this.state.orderForm ) {
			formElementsArray.push({
				id: key,
				config: this.state.orderForm[key]
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
							changed={(event) => this.inputChangedHandler(event, formElement.id)} />
					))}
					<Button btnType="Success" clicked={this.orderHandler}>Order</Button>
				</form>
		);
		if (this.props.loading) {
			form = <Spinner />;
		}
		return(
			<div className={styles.ContactData} >
				<h4>Enter your contact data</h4>
				{form}
			</div>
		);
	}
}

const mapDispatchToProps = dispatch => {
	return {
		onOrderBurger: (orderData) => dispatch(actions.purchaseBurger(orderData))
	}
}

const mapStateToProps = state => {
	return {
		ings: state.burgerBuilder.ingredients,
		price: state.burgerBuilder.totalPrice,
		loading: state.orders.loading
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(ContactData, axios));