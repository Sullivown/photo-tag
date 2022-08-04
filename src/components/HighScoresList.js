import React from 'react';
import styled from 'styled-components';

const StyledList = styled.ol`
	margin: 0;
	padding: 0;
	width: 100%;
`;

const StyledListItem = styled.li`
	display: flex;
	justify-content: space-between;
	gap: 10px;
`;

function HighScoresList(props) {
	const highScoreElements = props.highScores.map((score, index) => (
		<StyledListItem key={index}>
			<span>{`${index + 1}. ${score.name}`}</span>
			<span>
				{score.minutes < 9 ? `0${score.minutes}` : score.minutes}:
				{score.seconds <= 9 ? `0${score.seconds}` : score.seconds}
			</span>
		</StyledListItem>
	));

	return <StyledList>{highScoreElements}</StyledList>;
}

export default HighScoresList;
