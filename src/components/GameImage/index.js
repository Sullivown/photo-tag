import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';

import useWindowSize from '../../hooks/useWindowSize';

import Wally1 from '../../assets/images/wally1.jpg';

import ClickMenu from '../ClickMenu';

const StyledImage = styled.img`
	max-width: 100vw;
	position: relative;
	cursor: crosshair;
`;

function GameImage(props) {
	const [imgSize, setImgSize] = useState({ width: 0, height: 0 });
	const [currentClick, setCurrentClick] = useState({
		width: 0,
		height: 0,
		visible: false,
	});

	const correct = {
		width: { start: 0.7188478396994364, end: 0.7288478396994364 },
		height: { start: 0.19348370927318295, end: 0.20348370927318295 },
	};

	const imgRef = useRef();
	const windowSize = useWindowSize();

	useEffect(() => {
		setImgSize(getImgSize());
	}, [windowSize]);

	function getImgSize() {
		const { offsetWidth, offsetHeight } = imgRef.current;
		return { width: offsetWidth, height: offsetHeight };
	}

	function handleClick(event) {
		event.preventDefault();
		if (event.type === 'click') {
			handleLeftClick(event);
		} else {
			handleRightClick();
		}
	}

	function handleLeftClick(event) {
		const clickCoords = {
			width: event.clientX / imgSize.width,
			height: event.clientY / imgSize.height,
		};
		console.log(clickCoords);

		// Determine if correctly clicked
		if (
			clickCoords.height >= correct.height.start &&
			clickCoords.height <= correct.height.end &&
			clickCoords.width >= correct.width.start &&
			clickCoords.width <= correct.width.end
		) {
			console.log('Got him!');
		}

		setCurrentClick({ ...clickCoords, visible: true });
	}

	function handleRightClick() {
		setCurrentClick({ ...currentClick, visible: false });
	}

	return (
		<>
			<ClickMenu currentClick={currentClick} imgSize={imgSize} />
			<StyledImage
				id='current-image'
				onLoad={() => setImgSize(getImgSize())}
				ref={imgRef}
				src={Wally1}
				onClick={(e) => handleClick(e)}
				onContextMenu={(e) => handleClick(e)}
				alt='Where is wally?'
			/>
		</>
	);
}

export default GameImage;
