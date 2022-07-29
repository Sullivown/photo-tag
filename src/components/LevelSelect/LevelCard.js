import React from 'react';
import styled from 'styled-components';

import Button from '../../elements/Button';

const StyledLevelSelect = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	border: 1px solid black;
	border-radius: 5px;
	padding: 15px;
`;

function LevelCard(props) {
	return (
		<StyledLevelSelect data-id={props.level.id}>
			<h3>{props.level.name}</h3>
			<img src='#' alt={`${props.level.name} preview`} />
			<Button
				onClick={(e) =>
					props.handleLevelSelect(e.target.parentNode.dataset.id)
				}
			>
				Select
			</Button>
		</StyledLevelSelect>
	);
}

export default LevelCard;
