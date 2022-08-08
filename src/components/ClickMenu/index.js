import React, { useRef } from 'react';
import styled from 'styled-components';

import Option from './Option';

const StyledClickMenu = styled.div`
	display: flex;
	flex-direction: column;
	position: absolute;
	top: ${(props) =>
		`${props.currentClick.height + props.currentClick.offsetTop}px`};
	left: ${(props) => {
		let leftVal = 0;
		if (props.currentClick.width < window.innerWidth - props.menuWidth) {
			leftVal =
				props.currentClick.width + props.currentClick.offsetLeft + 'px';
		} else {
			leftVal =
				props.currentClick.width +
				props.currentClick.offsetLeft -
				props.menuWidth +
				'px';
		}
		return leftVal;
	}};
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
	const menuRef = useRef();
	const optionElements = props.level.answers.map((option) => {
		return option.found ? null : (
			<Option
				key={option.id}
				option={option}
				handleOptionClick={props.handleOptionClick}
			/>
		);
	});

	return (
		<StyledClickMenu
			ref={menuRef}
			menuWidth={menuRef.current ? menuRef.current.offsetWidth : 0}
			currentClick={props.currentClick}
			imgSize={props.imgSize}
			hidden={false}
		>
			{optionElements}
		</StyledClickMenu>
	);
}

export default ClickMenu;
