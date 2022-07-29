import React from 'react';
import styled from 'styled-components';

import LevelCard from './LevelCard';

const StyledLevelSelect = styled.div`
	display: flex;
	flex-direction: column;
	padding: 15px;
	align-items: center;
`;

const LevelsContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 50vh;
	gap: 15px;
`;

function LevelSelect(props) {
	const levelElements = props.levels.map((level) => (
		<LevelCard
			key={`level-${level.id}`}
			level={level}
			handleLevelSelect={props.handleLevelSelect}
		/>
	));

	return (
		<StyledLevelSelect>
			<h2>Stage Select:</h2>
			<LevelsContainer>{levelElements}</LevelsContainer>
		</StyledLevelSelect>
	);
}

export default LevelSelect;
