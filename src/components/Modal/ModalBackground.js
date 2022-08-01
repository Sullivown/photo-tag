import React from 'react';
import styled from 'styled-components';

const StyledModalBackground = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	height: 100%;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: rgba(219, 219, 219, 0.8);
	z-index: 10;
`;

function ModalBackground(props) {
	return <StyledModalBackground>{props.children}</StyledModalBackground>;
}

export default ModalBackground;
