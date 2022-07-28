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
		max-width: 100vw;
		font-family: sans-serif;
	}
`;

export default GlobalStyle;
