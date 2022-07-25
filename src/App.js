import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import useWindowSize from './hooks/useWindowSize';
import Wally1 from './assets/images/wally1.jpg';

const StyledImage = styled.img`
	max-width: 100vw;
`;

function App() {
	const [imgSize, setImgSize] = useState({ width: 0, height: 0 });

	const imgRef = useRef();
	const windowSize = useWindowSize();

	useEffect(() => {
		setImgSize(getImgSize());
	}, [windowSize]);

	function getImgSize() {
		const { offsetWidth, offsetHeight } = imgRef.current;
		return { width: offsetWidth, height: offsetHeight };
	}

	function reportCoords(event) {
		console.log(
			event.clientX / imgSize.width,
			event.clientY / imgSize.height
		);
	}

	return (
		<div className='App'>
			<StyledImage
				id='current-image'
				onLoad={() => setImgSize(getImgSize())}
				ref={imgRef}
				src={Wally1}
				onClick={(e) => reportCoords(e)}
				alt='Where is wally?'
			/>
		</div>
	);
}

export default App;
