import React from 'react';
import styled from 'styled-components';

import Timer from '../../components/Timer';

import Button from '../../elements/Button';
import H1 from '../../elements/H1';

const StyledHeader = styled.header`
	display: flex;
	position: sticky;
	top: 0;
	left: 0;
	background-color: ${(props) => props.theme.bg};
	justify-content: space-between;
	align-items: center;
	padding: 15px;
	min-height: 100px;
	width: 100%;
	border-bottom: 1px solid silver;
	z-index: 5;
`;

function Header(props) {
	return (
		<StyledHeader>
			<H1>Photo Tag</H1>
			{props.GameStage === 'level' && <Timer started={props.started} />}
			<Button>How to Play</Button>
		</StyledHeader>
	);
}

export default Header;