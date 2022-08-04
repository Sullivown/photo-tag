import React from 'react';
import styled from 'styled-components';

const StyledList = styled.ol`
	margin: 0;
	padding: 0;
`;

const StyledListItem = styled.li`
	display: flex;
	justify-content: space-between;
	gap: 10px;
`;

function HighScoresList(props) {
	const highScoreElements = props.highScores.map((score, index) => (
		<StyledListItem key={index}>
			<span>{`${index + 1}. ${score.username}`}</span>
			<span>-</span>
			<span>
				{score.score.minutes < 9
					? `0${score.score.minutes}`
					: score.score.minutes}
				:
				{score.score.seconds <= 9
					? `0${score.score.seconds}`
					: score.score.seconds}
			</span>
		</StyledListItem>
	));

	return <StyledList>{highScoreElements}</StyledList>;
}

export default HighScoresList;
