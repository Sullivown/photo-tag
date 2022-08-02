import React from 'react';

import ModalBackground from './ModalBackground';
import ModalPopUp from './ModalPopUp';

function Modal(ModalContent) {
	return function ContentWithModal({ ...props }) {
		return (
			<ModalBackground>
				<ModalPopUp>
					<ModalContent {...props} />
				</ModalPopUp>
			</ModalBackground>
		);
	};
}

export default Modal;
