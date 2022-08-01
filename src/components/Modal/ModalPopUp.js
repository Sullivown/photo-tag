import React from 'react';
import styled from 'styled-components';

import Button from '../../elements/Button';

const StyledModalPopUp = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 25px;
	padding: 2rem;
	background-color: ${(props) => props.theme.bg};
	border: 1px solid ${(props) => props.theme.primary};
	border-radius: 15px;
	z-index: 11;
`;

function ModalPopUp(props) {
	return (
		<StyledModalPopUp>
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
		</StyledModalPopUp>
	);
}

export default ModalPopUp;
