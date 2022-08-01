function checkForGameOver(answerArray, currentTime, timeLimit) {
	// check for all answers found
	let gameOver = answerArray.every((answer) => answer.found === true);
	// check for time limit reached
	if (
		currentTime.minutes >= timeLimit.minutes &&
		currentTime.seconds >= timeLimit.seconds
	) {
		gameOver = true;
	}

	return gameOver;
}

export default checkForGameOver;
