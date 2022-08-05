import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import HighScoresList from '../HighScoresList';
import WithLoadingWrapper from '../WithLoadingWrapper';

import Button from '../../elements/Button';
import H2 from '../../elements/H2';
import P from '../../elements/P';
import HR from '../../elements/HR';
import Input from '../../elements/Input';

import { getHighScores, postScore } from '../../firebase';

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

const SuccessP = styled(P)`
	color: green;
`;

const HighScoresListWithLoading = WithLoadingWrapper(HighScoresList);

function ScoreModalContent(props) {
	const [isLoading, setIsLoading] = useState(true);
	const [scoreSubmitted, setScoreSubmitted] = useState(false);
	const [highScores, setHighScores] = useState([]);
	const [userName, setUserName] = useState('');

	useEffect(() => {
		async function getScores() {
			const highScoresData = await getHighScores(props.levelId);
			setHighScores(highScoresData);
			setIsLoading(false);
		}

		getScores();
	}, [props.levelId]);

	function handleChange(e) {
		const value = e.target.value;
		setUserName(value);
	}

	function handleSubmitScore(e) {
		e.preventDefault();
		postScore(props.levelId, userName || 'Anonymous', props.score);
		setScoreSubmitted(true);
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
					<SuccessP>Score submitted!</SuccessP>
				) : (
					<>
						<Input
							name='username'
							placeholder='Your name (1 - 10 chars)'
							maxLength='10'
							minLength='1'
							value={userName}
							onChange={handleChange}
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
			<HighScoresListWithLoading
				highScores={highScores}
				isLoading={isLoading}
			/>
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
