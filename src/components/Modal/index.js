import React from 'react';

import ModalBackground from './ModalBackground';
import ModalPopUp from './ModalPopUp';

function Modal(props) {
	return (
		<ModalBackground>
			<ModalPopUp score={props.score} handleReset={props.handleReset} />
		</ModalBackground>
	);
}

export default Modal;
