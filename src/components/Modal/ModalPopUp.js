import React from 'react';
import styled from 'styled-components';

const StyledModalPopUp = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 25px;
	padding: 2rem;
	background-color: ${(props) => props.theme.bg};
	border: 1px solid ${(props) => props.theme.primary};
	border-radius: 15px;
	z-index: 11;
`;

function ModalPopUp(props) {
	return <StyledModalPopUp>{props.children}</StyledModalPopUp>;
}

export default ModalPopUp;
