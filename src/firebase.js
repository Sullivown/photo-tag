// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import {
	getFirestore,
	getDocs,
	query,
	addDoc,
	collection,
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
const app = initializeApp(firebaseConfig);

// Add a new document
async function addNewLevel() {
	try {
		await addDoc(collection(getFirestore(), 'levels'), {
			id: 1,
			name: 'Wally1',
			image: 'someurl',
			answers: [
				{
					id: 1,
					name: 'Wally',
					image: 'someimage',
					coordinates: {
						x: { start: 1658, end: 1763 },
						y: { start: 1934, end: 2151 },
					},
					found: false,
				},
				{
					id: 2,
					name: 'Confused Bob',
					image: 'someimage',
					coordinates: {
						x: { start: 384, end: 475 },
						y: { start: 61, end: 261 },
					},
					found: false,
				},
			],
		});
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

export { addNewLevel, getLevels, app };
