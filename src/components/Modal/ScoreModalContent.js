import React from 'react';

import Button from '../../elements/Button';
import H2 from '../../elements/H2';

function ScoreModalContent(props) {
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
			<Button>Submit Score</Button>
			<Button onClick={props.handleReset}>Main Menu</Button>
		</>
	);
}

export default ScoreModalContent;
