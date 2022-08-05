import React from 'react';
import styled from 'styled-components';

import Target from './Target';

import P from '../../elements/P';

const StyledTargetsBox = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 15px;
`;

function TargetsBox(props) {
	console.log(props);
	const TargetElements = props.targets.map((target) => (
		<Target image={target.image} name={target.name} found={target.found} />
	));

	return <StyledTargetsBox>{TargetElements}</StyledTargetsBox>;
}

export default TargetsBox;