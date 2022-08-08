import React from 'react';
import styled from 'styled-components';

import Target from './Target';

const StyledTargetsBox = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 15px;
`;

function TargetsBox(props) {
	const TargetElements = props.targets.map((target) => (
		<Target
			key={target.id}
			image={target.image}
			name={target.name}
			found={target.found}
		/>
	));

	return <StyledTargetsBox>{TargetElements}</StyledTargetsBox>;
}

export default TargetsBox;
