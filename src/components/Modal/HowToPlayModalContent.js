import React from 'react';

import Button from '../../elements/Button';
import H2 from '../../elements/H2';

function HowToPlayModalContent(props) {
	return (
		<>
			<H2>How To Play</H2>
			<div>Find the people in the fasest time!</div>
			<Button onClick={props.toggleHowToPlay}>Close</Button>
		</>
	);
}

export default HowToPlayModalContent;
