import React, { useEffect, useState } from 'react';
import { useStopwatch } from 'react-timer-hook';

import Header from './page-sections/Header';
import Main from './page-sections/Main';
import Footer from './page-sections/Footer';

import leveldata from './assets/test-data/leveldata.json';
import { TIME_LIMIT } from './gameSettings';
import checkForGameOver from './utilities/checkForGameOver';
import Modal from './components/Modal';
import ScoreModalContent from './components/Modal/ScoreModalContent';
import HowToPlayModalContent from './components/Modal/HowToPlayModalContent';

function App() {
	const [gameStage, setGameStage] = useState('select');
	const [levels, setLevels] = useState(leveldata);
	const [currentLevelId, setCurrentLevelId] = useState(null);
	const [score, setScore] = useState({ minutes: 0, seconds: 0 });
	const [isGameOver, setIsGameOver] = useState(false);
	const [howToPlayModalOpen, setHowToPlayModalOpen] = useState(false);

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

	function handleHowToPlayModalToggle() {
		setHowToPlayModalOpen((prevState) => !prevState);
	}

	const ScoreModal = Modal(ScoreModalContent);
	const HowToPlayModal = Modal(HowToPlayModalContent);

	return (
		<div className='App'>
			{isGameOver && (
				<ScoreModal score={score} handleReset={handleReset} />
			)}
			{howToPlayModalOpen && (
				<HowToPlayModal
					toggleHowToPlay={handleHowToPlayModalToggle}
					timeLimit={TIME_LIMIT}
				/>
			)}
			<Header
				gameStage={gameStage}
				started={isRunning}
				score={score}
				toggleHowToPlay={handleHowToPlayModalToggle}
			/>
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
