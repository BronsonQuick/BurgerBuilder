import React, { Component } from 'react';
import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button';
import styles from './Auth.module.css';
import * as actions from '../../store/actions/index';
import Spinner from '../../components/UI/Spinner/Spinner';
import { connect } from 'react-redux';

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
		}
	}
	render() {
		const formElementsArray = [];
		for ( let key in this.state.controls ) {
			formElementsArray.push({
				id: key,
				config: this.state.controls[key]
			});
		}
		let errorMessage = null;

		if ( this.props.error ) {
			errorMessage = (
				<p>{this.props.error.message}</p>
			);
		}
		let form = (
			<div className={styles.Auth}>
				{ errorMessage }
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
			</div>
		);
		if ( this.props.loading ) {
			form = <Spinner />;
		}
		return (
			<React.Fragment>
				{form}
			</React.Fragment>
		);
	}
}

const mapStateToProps = state => {
	return {
		loading: state.auth.loading,
		error: state.auth.error
	}
};

const mapDispatchToProps = dispatch => {
	return {
		onAuth: (email, password, isSignUp ) => dispatch(actions.auth(email, password, isSignUp))
	}
};
export default connect( mapStateToProps, mapDispatchToProps)(Auth);
