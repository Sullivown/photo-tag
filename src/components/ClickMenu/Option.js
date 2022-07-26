import React from 'react';
import styled from 'styled-components';

const StyledOption = styled.div`
	font-size: 1.5rem;
	cursor: pointer;

	&&:hover {
		color: ${(props) => props.theme.highlight};
	}
`;

function Option(props) {
	return (
		<StyledOption
			onClick={() => props.handleOptionClick(props.option.id)}
			data-answer={props.option.name}
		>
			{props.option.name}
		</StyledOption>
	);
}

export default Option;
