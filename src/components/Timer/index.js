import React from 'react';
import styled from 'styled-components';

import Button from '../../elements/Button';

const StyledTimer = styled.div`
	text-align: center;
`;

function Timer(props) {
	return (
		<StyledTimer>
			{props.started ? props.time || 0 : <Button>Start</Button>}
		</StyledTimer>
	);
}

export default Timer;
