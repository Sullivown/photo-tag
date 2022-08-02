import React from 'react';
import styled from 'styled-components';

const StyledLoadingPlaceholder = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 100%;
`;

function LoadingPlaceholder() {
	return <StyledLoadingPlaceholder>LOADING</StyledLoadingPlaceholder>;
}

export default LoadingPlaceholder;
