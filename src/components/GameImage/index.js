import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';

import useWindowSize from '../../hooks/useWindowSize';

import Wally1 from '../../assets/images/wally1.jpg';

import ClickMenu from '../ClickMenu';
import FoundBox from './FoundBox';

const StyledImage = styled.img`
	width: 100%;
	position: relative;
	cursor: crosshair;
`;

function GameImage(props) {
	const [imgSize, setImgSize] = useState({ width: 0, height: 0 });
	const [ratios, setRatios] = useState({ width: 0, height: 0 });
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
		setRatios(getRatios());
	}, [windowSize]);

	function getImgSize() {
		const { offsetWidth, offsetHeight } = imgRef.current;
		return { width: offsetWidth, height: offsetHeight };
	}

	function getRatios() {
		const { offsetWidth, offsetHeight, naturalWidth, naturalHeight } =
			imgRef.current;
		return {
			width: naturalWidth / offsetWidth,
			height: naturalHeight / offsetHeight,
		};
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
			width: event.nativeEvent.offsetX,
			height: event.nativeEvent.offsetY,
			offsetTop: event.target.offsetTop,
			offsetLeft: event.target.offsetLeft,
			visible: true,
		};
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

		console.log(currentClick);

		if (
			currentClick.width >=
				correctAnswer.coordinates.x.start / ratios.width &&
			currentClick.width <=
				correctAnswer.coordinates.x.end / ratios.width &&
			currentClick.height >=
				correctAnswer.coordinates.y.start / ratios.height &&
			currentClick.height <=
				correctAnswer.coordinates.y.end / ratios.height
		) {
			props.handleFound(props.level.id, correctAnswer.id);
		}
	}

	const answerBoxElements = props.level.answers.map(
		(answer) =>
			answer.found && (
				<FoundBox
					key={`answer-${answer.id}`}
					coordinates={answer.coordinates}
					ratios={ratios}
					offsetTop={currentClick.offsetTop}
					offsetLeft={currentClick.offsetLeft}
				/>
			)
	);

	return (
		<>
			{answerBoxElements}
			<StyledImage
				id='current-image'
				ref={imgRef}
				src={Wally1}
				onLoad={() => {
					setImgSize(getImgSize());
					setRatios(getRatios());
				}}
				onClick={(e) => handleClick(e)}
				onContextMenu={(e) => handleClick(e)}
				alt='Where is wally?'
			/>
			<ClickMenu
				level={props.level}
				currentClick={currentClick}
				imgSize={imgSize}
				handleOptionClick={handleOptionClick}
			/>
		</>
	);
}

export default GameImage;
