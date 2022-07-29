import React, { useContext } from 'react';
import styled from 'styled-components';

import Option from './Option';

const StyledClickMenu = styled.div`
	display: flex;
	flex-direction: column;
	position: absolute;
	top: ${(props) =>
		`${props.currentClick.height + props.currentClick.offsetTop}px`};
	left: ${(props) =>
		`${props.currentClick.width + props.currentClick.offsetLeft}px`};
	color: ${(props) => props.theme.secondary};
	background-color: ${(props) => props.theme.primary};
	width: 200px;
	visibility: ${(props) =>
		props.currentClick.visible ? 'visible' : 'hidden'};
	z-index: 3;
	padding: 5px;
	border-radius: 5px;
	opacity: 0.95;
`;

function ClickMenu(props) {
	const optionElements = props.level.answers.map((option) => (
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
