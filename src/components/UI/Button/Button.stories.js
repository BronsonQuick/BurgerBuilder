import React from 'react';
import Button from './Button';

export default {
	component: Button,
	title: 'Button'
}

export const buttonSuccess = () => <Button btnType="Success">Success</Button>;
export const buttonDanger = () => <Button btnType="Danger">Danger</Button>;
