import React, { useState } from 'react';
import { connect } from 'react-redux';
import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button';
import styles from './Auth.module.css';
import * as actions from '../../store/actions/index';
import Spinner from '../../components/UI/Spinner/Spinner';
import { Redirect } from 'react-router-dom';

function Auth(props) {
	const [ constrolsState, setControlsState ] = useState({
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
			}
	});
	const [signup, setSignup ] = useState(false);
	if ( !props.buildingBurger && props.authRedirectPath !== '/' ) {
		props.onSetAuthRedirectPath();
	}
	const inputChangedHandler = (event, controlName) => {
		const updatedControls = {
			...constrolsState,
			[controlName]: {
				...constrolsState[controlName],
				value: event.target.value
			}
		};
		setControlsState(updatedControls);
	}
	const submitHandler = (event) => {
		event.preventDefault();
		props.onAuth(constrolsState.email.value, constrolsState.password.value, constrolsState.isSignUp );
	}
	const switchAuthModeHandler = () => {
		setSignup(!signup);
	}
	let authRedirect = null;
	if ( props.isAuthenticated ) {
		authRedirect = <Redirect to={props.authRedirectPath} />;
	}
	const formElementsArray = [];
	for ( let key in constrolsState ) {
		formElementsArray.push({
			id: key,
			config: constrolsState[key]
		});
	}
	let errorMessage = null;

	if ( props.error ) {
		errorMessage = (
			<p>{props.error.message}</p>
		);
	}
	let form = (
		<div className={styles.Auth}>
			{authRedirect}
			{ errorMessage }
			<form onSubmit={submitHandler}>
				{formElementsArray.map( formElement => (
					<Input
						key={formElement.id}
						elementType={formElement.config.elementType}
						elementConfig={formElement.config.elementConfig}
						value={formElement.config.value}
						changed={(event) => inputChangedHandler(event, formElement.id)} />
				))}
				<Button btnType="Success">Login</Button>
			</form>
			<Button
				btnType="Danger"
				clicked={switchAuthModeHandler}>
				Switch to {signup ? 'Sign In': 'Sign Up'}
			</Button>
		</div>
	);
	if ( props.loading ) {
		form = <Spinner />;
	}
	return (
		<React.Fragment>
			{form}
		</React.Fragment>
	);
}

const mapStateToProps = state => {
	return {
		loading: state.auth.loading,
		error: state.auth.error,
		isAuthenticated: state.auth.token !== null,
		buildingBurger: state.burgerBuilder.building,
		authRedirectPath: state.auth.authRedirectPath
	}
};

const mapDispatchToProps = dispatch => {
	return {
		onAuth: (email, password, isSignUp ) => dispatch(actions.auth(email, password, isSignUp)),
		onSetAuthRedirectPath: () => dispatch(actions.setAuthRedirectPath('/'))
	}
};
export default connect( mapStateToProps, mapDispatchToProps)(Auth);
