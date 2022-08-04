import { async } from '@firebase/util';
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import HighScoresList from '../HighScoresList';

import Button from '../../elements/Button';
import H2 from '../../elements/H2';
import HR from '../../elements/HR';
import Input from '../../elements/Input';

import { getHighScores } from '../../firebase';

const StyledDiv = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	text-align: center;
	gap: 15px;
`;

const FullWidthButton = styled(Button)`
	width: 100%;
`;

function ScoreModalContent(props) {
	const [isLoading, setIsLoading] = useState(true);
	const [scoreSubmitted, setScoreSubmitted] = useState(false);
	const [highScores, setHighScores] = useState([]);

	useEffect(() => {
		async function getScores() {
			const highScoresData = await getHighScores(props.levelId);
			setHighScores(highScoresData);
		}

		getScores();
	}, [props.levelId]);

	function handleSubmitScore(e) {
		e.preventDefault();
	}

	return (
		<>
			<H2>Your Score:</H2>
			<div>
				<span>
					{props.score.minutes < 9
						? `0${props.score.minutes}`
						: props.score.minutes}
				</span>
				:
				<span>
					{props.score.seconds <= 9
						? `0${props.score.seconds}`
						: props.score.seconds}
				</span>
			</div>
			<StyledDiv>
				{scoreSubmitted ? (
					'Score submitted!'
				) : (
					<>
						<Input
							name='username'
							placeholder='Your name (3 - 10 chars)'
							maxLength='10'
							minLength='3'
						/>
						<Button onClick={handleSubmitScore}>
							Submit Score
						</Button>
					</>
				)}
			</StyledDiv>
			<HR />
			<StyledDiv>
				<H2>High Scores:</H2>
			</StyledDiv>
			<HighScoresList highScores={highScores} />
			<HR />
			<StyledDiv>
				<FullWidthButton onClick={props.handleReset}>
					Main Menu
				</FullWidthButton>
			</StyledDiv>
		</>
	);
}

export default ScoreModalContent;
