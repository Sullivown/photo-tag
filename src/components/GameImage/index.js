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
		offsetTop: 0,
		offsetLeft: 0,
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
		//console.log(event);
		//console.log(event.target.offsetTop) <--- This is the height of the header
		// clientHeight and clientWidth maybe?
		// target.offsetWidth and offsetHeight is width and height the node we are in maybe?
		const clickCoords = {
			width: event.nativeEvent.offsetX,
			height: event.nativeEvent.offsetY,
			offsetTop: event.target.offsetTop,
			offsetLeft: event.target.offsetLeft,
			visible: true,
		};
		console.log(clickCoords);
		setCurrentClick(clickCoords);
	}

	function handleRightClick() {
		setCurrentClick({ ...currentClick, visible: false });
	}

	function handleOptionClick(optionId) {
		// Determine if correctly clicked
		const correctAnswer = props.level.answers.find(
			(item) => item.id === optionId
		);
		console.log(
			'Width start: ' + imgSize.width / correctAnswer.coordinates.x.start
		);
		console.log(
			'Width end: ' + imgSize.width / correctAnswer.coordinates.x.end
		);
		console.log(
			'Height start: ' +
				imgSize.height / correctAnswer.coordinates.y.start
		);
		console.log(
			'Height end: ' + imgSize.height / correctAnswer.coordinates.y.end
		);
		console.log(currentClick);
		if (
			currentClick.height >=
				imgSize.height / correctAnswer.coordinates.y.end &&
			currentClick.height <=
				imgSize.height / correctAnswer.coordinates.y.start &&
			currentClick.width >=
				imgSize.width / correctAnswer.coordinates.x.end &&
			currentClick.width <=
				imgSize.width / correctAnswer.coordinates.x.start
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
