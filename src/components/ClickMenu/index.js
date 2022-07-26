import React, { useContext } from 'react';
import styled from 'styled-components';

import { LevelContext } from '../../App';
import Option from './Option';

const StyledClickMenu = styled.div`
	display: flex;
	flex-direction: column;
	position: absolute;
	top: ${(props) => `${props.currentClick.height * props.imgSize.height}px`};
	left: ${(props) => `${props.currentClick.width * props.imgSize.width}px`};
	color: ${(props) => props.theme.secondary};
	background-color: ${(props) => props.theme.primary};
	width: 200px;
	visibility: ${(props) =>
		props.currentClick.visible ? 'visible' : 'hidden'};
	z-index: 5;
	padding: 5px;
	border-radius: 5px;
	opacity: 0.95;
`;

function ClickMenu(props) {
	const level = useContext(LevelContext);
	const optionElements = level.answers.map((option) => (
		<Option
			key={option.id}
			option={option}
			handleOptionClick={props.handleOptionClick}
		/>
	));

	return (
		<StyledClickMenu
			currentClick={props.currentClick}
			imgSize={props.imgSize}
			hidden={false}
		>
			{optionElements}
		</StyledClickMenu>
	);
}

export default ClickMenu;
