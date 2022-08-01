import React from 'react';
import styled from 'styled-components';

const StyledTimer = styled.div`
	text-align: center;
`;

function Timer(props) {
	return (
		<StyledTimer>
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
		</StyledTimer>
	);
}

export default Timer;
