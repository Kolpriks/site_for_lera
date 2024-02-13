import React, { useState } from 'react';
import styles from '../../../styles/Modal.module.css';

const Modal = ({ active, setActive, children }) => {

	return (
		<div className={active ? styles.modalActive : styles.modal} onClick={() => setActive(false)} >
			<div className={active ? styles.modalContentActive : styles.modalContent} onClick={e => e.stopPropagation()}>
				{children}
			</div>
		</div>
	)
}

export default Modal;
