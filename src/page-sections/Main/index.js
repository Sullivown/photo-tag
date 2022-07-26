import React from 'react';
import styled from 'styled-components';

import StageSelect from '../../components/StageSelect';
import GameImage from '../../components/GameImage';

const StyledMain = styled.main`
	min-height: 80vh;
`;

function Main(props) {
	return (
		<StyledMain>
			{
				{
					select: <StageSelect />,
					level: <GameImage level={props.level} />,
				}[props.gameStage]
			}
		</StyledMain>
	);
}

export default Main;
