import * as actionTypes from '../actions/actionTypes';
import axios from 'axios';

export const authStart = () => {
	return {
		type: actionTypes.AUTH_START
	};
};

export const authSuccess = (token, userId) => {
	return {
		type: actionTypes.AUTH_SUCCESS,
		idToken: token,
		userId: userId
	};
};

export const authFailed = (error) => {
	return {
		type: actionTypes.AUTH_FAILED,
		error: error	
	};
}

export const auth = (email, password, isSignUp) => {
	return dispatch => {
		dispatch(authStart());
		const authData = {
			email: email,
			password: password,
			returnSecureToken: true
		}
		let url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAjf-2T230U7bDlYCqAlQABOZjoCpS1kCY';

		if ( !isSignUp ) {
			url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAjf-2T230U7bDlYCqAlQABOZjoCpS1kCY';
		}

		axios.post(url,authData)
			.then(response => {
				dispatch(authSuccess(response.data.idToken, response.data.localId));
			})
			.catch(error => {
				console.log(error);
				dispatch(authFailed(error));
			}) 
	};
};
