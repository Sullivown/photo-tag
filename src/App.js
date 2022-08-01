import React, { useEffect, useState } from 'react';
import { useStopwatch } from 'react-timer-hook';

import Header from './page-sections/Header';
import Main from './page-sections/Main';
import Footer from './page-sections/Footer';

import leveldata from './assets/test-data/leveldata.json';
import { TIME_LIMIT } from './gameSettings';
import checkForGameOver from './utilities/checkForGameOver';
import Modal from './components/Modal';

function App() {
	const [gameStage, setGameStage] = useState('select');
	const [levels, setLevels] = useState(leveldata);
	const [currentLevelId, setCurrentLevelId] = useState(null);
	const [score, setScore] = useState({ minutes: 0, seconds: 0 });
	const [isGameOver, setIsGameOver] = useState(false);

	const { seconds, minutes, isRunning, start, pause, reset } = useStopwatch({
		autoStart: false,
	});

	// Game end state checker: all answers found
	useEffect(() => {
		if (isRunning) {
			const level = levels.find((level) => level.id === currentLevelId);

			if (checkForGameOver(level.answers, score, TIME_LIMIT)) {
				handleGameOver();
			}
		}
	}, [levels]);

	// Timer tracker and game end state checker: out of time
	useEffect(() => {
		if (isRunning) {
			const level = levels.find((level) => level.id === currentLevelId);
			checkForGameOver(level.answers, score, TIME_LIMIT)
				? handleGameOver()
				: setScore({ minutes, seconds });
		}
	}, [minutes, seconds]);

	function handleLevelSelect(id) {
		setCurrentLevelId(parseInt(id));
		setGameStage('level');
		start();
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

	function handleGameOver() {
		setIsGameOver(true);
		pause();
		console.log(
			`Game over! Your score is: ${score.minutes} minutes and ${score.seconds} seconds!`
		);
	}

	function handleReset() {
		setGameStage('select');
		setLevels(leveldata);
		setScore({ minutes: 0, seconds: 0 });
		setIsGameOver(false);
		reset();
	}

	return (
		<div className='App'>
			{isGameOver && <Modal score={score} handleReset={handleReset} />}
			<Header gameStage={gameStage} started={isRunning} score={score} />
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
