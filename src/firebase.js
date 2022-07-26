// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import {
	getFirestore,
	getDocs,
	query,
	doc,
	addDoc,
	setDoc,
	collection,
	limit,
	orderBy,
} from 'firebase/firestore';

const firebaseConfig = {
	apiKey: 'AIzaSyCjq7lPanAiVQHPUBX_dqmNWDYjlIjYyr4',
	authDomain: 'photo-tag-f1780.firebaseapp.com',
	projectId: 'photo-tag-f1780',
	storageBucket: 'photo-tag-f1780.appspot.com',
	messagingSenderId: '901313523744',
	appId: '1:901313523744:web:2bfd7f8c23a010a1898c45',
};

// Initialize Firebase
initializeApp(firebaseConfig);

// Add a new document
async function addNewLevel(id, data) {
	const levelsRef = collection(getFirestore(), 'levels');
	try {
		await setDoc(doc(levelsRef, id), data);
	} catch (error) {
		console.error('Error writing new message to Firebase Database', error);
	}
}

async function getLevels() {
	const levelsData = [];
	const levelsQuery = query(collection(getFirestore(), 'levels'));
	const querySnapshot = await getDocs(levelsQuery);
	querySnapshot.forEach((doc) => {
		levelsData.push(doc.data());
	});

	return levelsData;
}

async function getHighScores(levelId) {
	const scoresData = [];
	const scoresQuery = query(
		collection(getFirestore(), `levels/${levelId}/scores`),
		orderBy('minutes'),
		orderBy('seconds'),
		limit(5)
	);
	const querySnapshot = await getDocs(scoresQuery);
	querySnapshot.forEach((doc) => {
		scoresData.push(doc.data());
	});

	return scoresData;
}

async function postScore(levelId, userName, score) {
	const data = {
		name: userName,
		minutes: score.minutes,
		seconds: score.seconds,
	};
	try {
		await addDoc(
			collection(getFirestore(), `levels/${levelId}/scores/`),
			data
		);
	} catch (error) {
		console.error('Error writing new message to Firebase Database', error);
	}
}

export { addNewLevel, getLevels, getHighScores, postScore };
