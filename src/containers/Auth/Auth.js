import React, { Component } from 'react';
import { connect } from 'react-redux';
import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button';
import styles from './Auth.module.css';
import * as actions from '../../store/actions/index';

class Auth extends Component {
	state = {
		controls:  {
			email: {
				elementType: 'input',
				elementConfig: {
					type: 'email',
					placeholder: 'Your email address'
				},
				value: ''
			},
			password: {
				elementType: 'input',
				elementConfig: {
					type: 'password',
					placeholder: 'Your password'
				},
				value: ''
			},
		},
		isSignUp: true
	}
	inputChangedHandler = (event, controlName) => {
		const updatedControls = {
			...this.state.controls,
			[controlName]: {
				...this.state.controls[controlName],
				value: event.target.value
			}
		};
		this.setState({controls: updatedControls});
	}
	submitHandler = (event) => {
		event.preventDefault();
		this.props.onAuth(this.state.controls.email.value, this.state.controls.password.value, this.state.isSignUp );
	}
	switchAuthModeHandler = () => {
		this.setState( prevState => {
			return {
				isSignUp: !prevState.isSignUp
			}
		});
	}
	render() {
		const formElementsArray = [];
		for ( let key in this.state.controls ) {
			formElementsArray.push({
				id: key,
				config: this.state.controls[key]
			});
		}
		let form = (
			<div className={styles.Auth}>
				<form onSubmit={this.submitHandler}>
					{formElementsArray.map( formElement => (
						<Input
							key={formElement.id}
							elementType={formElement.config.elementType}
							elementConfig={formElement.config.elementConfig}
							value={formElement.config.value}
							changed={(event) => this.inputChangedHandler(event, formElement.id)} />
					))}
					<Button btnType="Success">Login</Button>
				</form>
				<Button
					btnType="Danger"
					clicked={this.switchAuthModeHandler}>
					Switch to {this.state.isSignUp ? 'Sign In': 'Sign Up'}
				</Button>
			</div>
		);
		return (
			<React.Fragment>
				{form}
			</React.Fragment>
		);
	}
}

const mapDispatchToProps = dispatch => {
	return {
		onAuth: (email, password, isSignUp ) => dispatch(actions.auth(email, password, isSignUp))
	}
};
export default connect( null, mapDispatchToProps)(Auth);
