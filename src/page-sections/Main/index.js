import React from 'react';
import styled from 'styled-components';

import LevelSelect from '../../components/LevelSelect';
import GameImage from '../../components/GameImage';

const StyledMain = styled.main`
	min-height: 100vh;
`;

function Main(props) {
	return (
		<StyledMain>
			{
				{
					select: (
						<LevelSelect
							levels={props.levels}
							handleLevelSelect={props.handleLevelSelect}
						/>
					),
					level: (
						<GameImage
							level={props.level}
							handleFound={props.handleFound}
						/>
					),
				}[props.gameStage]
			}
		</StyledMain>
	);
}

export default Main;
