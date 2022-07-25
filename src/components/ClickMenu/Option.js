import React from 'react';
import styled from 'styled-components';

const StyledOption = styled.div`
	font-size: 1.5rem;
	cursor: pointer;

	&&:hover {
		color: blue;
	}
`;

function Option(props) {
	return <StyledOption>{props.children}</StyledOption>;
}

export default Option;
