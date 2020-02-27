import React from 'react';
import Modal from './Modal';

export default {
	component: Modal,
	title: 'Modal'
}

export const modal = () => <Modal show={true}>Amazing modal!</Modal>;
