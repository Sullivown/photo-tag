import React from 'react';
import styled from 'styled-components';

import P from '../../elements/P';

const StyledTargetContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	border: 1px solid ${(props) => props.theme.primary};
	padding: 5px;
	gap: 5px;
	border-radius: 15px;
	opacity: ${(props) => (props.found ? 0.2 : 1)};

	&&:hover {
		transform: scale(1.1);
	}
`;

const StyledTargetImg = styled.img`
	height: 85px;
	width: auto;
`;

function Target(props) {
	return (
		<StyledTargetContainer found={props.found}>
			<StyledTargetImg src={props.image} alt={props.name} />
			<P>{props.name}</P>
		</StyledTargetContainer>
	);
}

export default Target;
