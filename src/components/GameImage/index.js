import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';

import useWindowSize from '../../hooks/useWindowSize';

import Wally1 from '../../assets/images/wally1.jpg';

import ClickMenu from '../ClickMenu';

const StyledImage = styled.img`
	width: 100%;
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
		console.log(imgRef);
		const clickCoords = {
			width: event.clientX / imgSize.width,
			height:
				event.clientY / imgSize.height +
				imgRef.current.scrollTop / imgSize.height,
		};
		console.log(clickCoords);
		setCurrentClick({ ...clickCoords, visible: true });
	}

	function handleRightClick() {
		setCurrentClick({ ...currentClick, visible: false });
	}

	function handleOptionClick(optionId) {
		// Determine if correctly clicked
		const correctAnswer = props.level.answers.find(
			(item) => item.id === optionId
		);
		if (
			currentClick.height >=
				imgSize.height / correctAnswer.coordinates.y.start &&
			currentClick.height <=
				imgSize.height / correctAnswer.coordinates.y.end &&
			currentClick.width >=
				imgSize.width / correctAnswer.coordinates.x.start &&
			currentClick.width <=
				imgSize.width / correctAnswer.coordinates.x.end
		) {
			console.log('Got him!');
		}
	}

	return (
		<>
			<ClickMenu
				currentClick={currentClick}
				imgSize={imgSize}
				handleOptionClick={handleOptionClick}
			/>
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
