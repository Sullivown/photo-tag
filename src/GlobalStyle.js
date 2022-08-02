import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
	* {
		box-sizing: border-box;
	}

	html,
	body,
	#root {
		margin: 0px;
	}

	.App {
		font-family: sans-serif;
		display:flex; 
		flex-direction:column; 
		height: 100%;
	}
`;

export default GlobalStyle;
