import styled from 'styled-components';

const Button = styled.button`
	color: ${(props) => props.theme.secondary};
	background-color: ${(props) => props.theme.primary};
	padding: 10px;
	border-radius: 15px;
	border: 1px solid ${(props) => props.theme.primary};
	font: inherit;
	cursor: pointer;
	min-width: 100px;

	&&:hover {
		color: ${(props) => props.theme.primary};
		background-color: ${(props) => props.theme.secondary};
		border: 1px solid ${(props) => props.theme.primary};
	}

	&&:active {
		transform: translateY(1px);
	}
`;

export default Button;
