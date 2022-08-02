import React from 'react';
import styled from 'styled-components';

import LevelSelect from '../../components/LevelSelect';
import GameImage from '../../components/GameImage';

import WithLoadingWrapper from '../../components/WithLoadingWrapper';

const StyledMain = styled.main`
	height: 100%;
`;

const LevelSelectWithLoading = WithLoadingWrapper(LevelSelect);

function Main(props) {
	return (
		<StyledMain>
			{
				{
					select: (
						<LevelSelectWithLoading
							levels={props.levels}
							handleLevelSelect={props.handleLevelSelect}
							isLoading={props.dataLoading}
						/>
					),
					level: (
						<GameImage
							level={props.levels.find(
								(level) => level.id === props.currentLevelId
							)}
							handleFound={props.handleFound}
						/>
					),
				}[props.gameStage]
			}
		</StyledMain>
	);
}

export default Main;
