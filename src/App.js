import React, { useState, createContext } from 'react';
import { ThemeProvider } from 'styled-components';

import Header from './page-sections/Header';
import Main from './page-sections/Main';
import Footer from './page-sections/Footer';

import leveldata from './assets/test-data/leveldata.json';

const theme = {
	primary: '#9555AF',
	secondary: '#FFFFFF',
	highlight: '#011627',
	bg: '#FFFFFF',
};

export const LevelContext = createContext();

function App() {
	const [gameStage, setGameStage] = useState('level');
	const [started, setStarted] = useState(false);
	const [levels, setLevels] = useState(leveldata);
	const [currentLevel, setCurrentLevel] = useState(0);
	const [time, setTime] = useState();

	return (
		<div className='App'>
			<LevelContext.Provider value={levels[currentLevel]}>
				<ThemeProvider theme={theme}>
					<Header gameStage={gameStage} started={started} />
					<Main gameStage={gameStage} level={levels[currentLevel]} />
					<Footer />
				</ThemeProvider>
			</LevelContext.Provider>
		</div>
	);
}

export default App;
