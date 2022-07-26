import React from 'react';
import styled from 'styled-components';

import GreenTick from '../../assets/icons/green-tick.png';

const StyledFoundBox = styled.div`
	display: flex;
	flex-direction: column;
	position: absolute;
	top: ${(props) => `${props.coordinates.y}px`};
	left: ${(props) => `${props.coordinates.x}px`};
	color: ${(props) => props.theme.secondary};
	border: 0.2rem solid ${(props) => props.theme.primary};
	border-radius: 15px;
	width: ${(props) => `${props.width}px`};
	height: ${(props) => `${props.height}px`};
	z-index: 2;
	opacity: 0.95;
	cursor: url(${GreenTick}), auto;
`;

function FoundBox(props) {
	return (
		<StyledFoundBox
			coordinates={{
				x:
					props.coordinates.x.start / props.ratios.width +
					props.offsetLeft,
				y:
					props.coordinates.y.start / props.ratios.height +
					props.offsetTop,
			}}
			width={
				props.coordinates.x.end / props.ratios.width -
				props.coordinates.x.start / props.ratios.width
			}
			height={
				props.coordinates.y.end / props.ratios.height -
				props.coordinates.y.start / props.ratios.height
			}
			offsetTop={props.offsetTop}
			offsetLeft={props.offsetLeft}
		/>
	);
}

export default FoundBox;
