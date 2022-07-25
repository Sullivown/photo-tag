import React from 'react';
import styled from 'styled-components';

import Option from './Option';

const StyledClickMenu = styled.div`
	display: flex;
	flex-direction: column;
	position: absolute;
	top: ${(props) =>
		`${
			props.currentClick.height * props.imgSize.height + window.scrollY
		}px`};
	left: ${(props) =>
		`${props.currentClick.width * props.imgSize.width + window.scrollX}px`};
	background-color: red;
	width: 200px;
	visibility: ${(props) =>
		props.currentClick.visible ? 'visible' : 'hidden'};
	z-index: 5;
	padding: 5px;
	border-radius: 5px;
	opacity: 0.9;
`;

function ClickMenu(props) {
	return (
		<StyledClickMenu
			currentClick={props.currentClick}
			imgSize={props.imgSize}
			hidden={false}
		>
			<Option>Bob</Option>
			<Option>Peter</Option>
			<Option>Wally</Option>
		</StyledClickMenu>
	);
}

export default ClickMenu;
