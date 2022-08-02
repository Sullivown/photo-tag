import React from 'react';
import Button from '../../elements/Button';

function ScoreModalContent(props) {
	return (
		<>
			<h3>Your Score:</h3>
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
			<Button onClick={props.handleReset}>Main Menu</Button>
		</>
	);
}

export default ScoreModalContent;
