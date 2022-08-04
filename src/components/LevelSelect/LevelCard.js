import React from 'react';
import styled from 'styled-components';

import Button from '../../elements/Button';
import H3 from '../../elements/H3';

const StyledLevelSelect = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	border: 1px solid black;
	border-radius: 5px;
	padding: 15px;
	gap: 15px;
`;

const StyledLevelCardImage = styled.img`
	max-width: 200px;
	max-height: 300px;
	border-radius: 15px;
`;

function LevelCard(props) {
	return (
		<StyledLevelSelect data-id={props.level.id}>
			<H3>{props.level.name}</H3>
			<StyledLevelCardImage
				src={props.level.image}
				alt={`${props.level.name} preview`}
			/>
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
