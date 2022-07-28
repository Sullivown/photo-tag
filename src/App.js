import React, { useState } from 'react';

import Header from './page-sections/Header';
import Main from './page-sections/Main';
import Footer from './page-sections/Footer';

import leveldata from './assets/test-data/leveldata.json';

function App() {
	const [gameStage, setGameStage] = useState('level');
	const [started, setStarted] = useState(false);
	const [levels, setLevels] = useState(leveldata);
	const [currentLevel, setCurrentLevel] = useState(0);
	const [time, setTime] = useState();

	function handleFound(levelId, answerId) {
		console.log('Found!');
		setLevels((prevLevels) => {
			return prevLevels.map((level) =>
				level.id === levelId
					? {
							...level,
							answers: level.answers.map((answer) =>
								answer.id === answerId
									? { ...answer, found: true }
									: answer
							),
					  }
					: level
			);
		});
	}

	return (
		<div className='App'>
			<Header gameStage={gameStage} started={started} />
			<Main
				gameStage={gameStage}
				level={levels[currentLevel]}
				handleFound={handleFound}
			/>
			<Footer />
		</div>
	);
}

export default App;
