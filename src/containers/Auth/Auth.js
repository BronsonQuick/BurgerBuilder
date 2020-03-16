import React, { Component } from 'react';
import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button';
import styles from './Auth.module.css';

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
		let form = (
			<form className={styles.Auth}>
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
		);
		return (
			<React.Fragment>
				{form}
			</React.Fragment>
		);
	}
}
export default Auth;
