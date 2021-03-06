import React, { useState, useEffect } from 'react';
import Modal from '../../components/UI/Modal/Modal';

const withErrorHandler = (WrappedComponent, axios) => {
	return props => {
		const [ error, setError ] = useState(null);
		const requestInterceptor = axios.interceptors.request.use(req => {
			setError(null);
			return req;
		});
		const responseInterceptor = axios.interceptors.response.use( response => response, err => {
			setError(err);
		});
		useEffect((requestInterceptor) => {
			return () => {
				axios.interceptors.request.eject(requestInterceptor);
				axios.interceptors.response.eject(responseInterceptor);
			}
		}, [requestInterceptor, responseInterceptor] );
		const errorConfirmedHandler = (err) => {
			setError(err);
		}
		return (
			<React.Fragment>
				<Modal show={error} clicked={errorConfirmedHandler}>
					{error ? error.message : null}
				</Modal>
				<WrappedComponent {...props} />
			</React.Fragment>
		) }
}

export default withErrorHandler;
