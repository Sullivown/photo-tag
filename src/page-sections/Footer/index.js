import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
	display: flex;
	color: ${(props) => props.theme.secondary};
	background-color: ${(props) => props.theme.primary};
	justify-content: space-between;
	align-items: center;
	padding: 15px;
	margin-top: auto;
	min-height: 100px;
	width: 100%;
	z-index: 5;
`;

function Footer() {
	return <StyledFooter>Footer</StyledFooter>;
}

export default Footer;
