import React, { useState } from 'react';

import Header from './page-sections/Header';
import Main from './page-sections/Main';
import Footer from './page-sections/Footer';

import leveldata from './assets/test-data/leveldata.json';

function App() {
	const [gameStage, setGameStage] = useState('select');
	const [started, setStarted] = useState(false);
	const [levels, setLevels] = useState(leveldata);
	const [currentLevelId, setCurrentLevelId] = useState(null);
	const [time, setTime] = useState();

	function handleLevelSelect(id) {
		setCurrentLevelId(parseInt(id));
		setGameStage('level');
	}

	function handleFound(levelId, answerId) {
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
				levels={levels}
				level={levels.find((level) => level.id === currentLevelId)}
				handleLevelSelect={handleLevelSelect}
				handleFound={handleFound}
			/>
			<Footer />
		</div>
	);
}

export default App;
