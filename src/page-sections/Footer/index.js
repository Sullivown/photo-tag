import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
	display: flex;
	color: ${(props) => props.theme.secondary};
	background-color: ${(props) => props.theme.primary};
	justify-content: space-between;
	align-items: center;
	padding: 15px;
	height: 100px;
	width: 100%;
	z-index: 5;
	margin-top: auto;
`;

function Footer() {
	return <StyledFooter>Footer</StyledFooter>;
}

export default Footer;
