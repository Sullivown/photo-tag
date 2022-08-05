import React from 'react';

import Button from '../../elements/Button';
import H2 from '../../elements/H2';
import H3 from '../../elements/H3';
import P from '../../elements/P';

function HowToPlayModalContent(props) {
	return (
		<>
			<H2>How To Play</H2>
			<P>Find the targets as fast as you can!</P>
			<H3>How To Locate Targets:</H3>
			<P>
				Click on the image and select the correct target from the pop-up
				menu. If you are correct the target will be highlighted.
			</P>
			<Button onClick={props.toggleHowToPlay}>Close</Button>
		</>
	);
}

export default HowToPlayModalContent;
