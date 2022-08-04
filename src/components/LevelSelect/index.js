import React from 'react';
import styled from 'styled-components';

import LevelCard from './LevelCard';
import H2 from '../../elements/H2';

const StyledLevelSelect = styled.div`
	display: flex;
	flex-direction: column;
	padding: 15px;
	align-items: center;
	justify-content: center;
	min-height: 80vh;
	height: 100%;
	gap: 25px;
`;

const LevelsContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 15px;
	flex-wrap: wrap;
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
			<H2>Stage Select:</H2>
			<LevelsContainer>{levelElements}</LevelsContainer>
		</StyledLevelSelect>
	);
}

export default LevelSelect;
