

// This file assumes the Firebase SDK has been loaded globally via script tags in index.html
let db: any;
const firebase = (window as any).firebase;

const firebaseConfig = {
    apiKey: "AIzaSyAzXpRjziI1s3iiMLy7rYOLPKqcOpdEDn8",
    authDomain: "quiz-fanida.firebaseapp.com",
    projectId: "quiz-fanida",
    storageBucket: "quiz-fanida.appspot.com",
    messagingSenderId: "360061824874",
    appId: "1:360061824874:web:63b78b3cd034b6930e3f13",
    measurementId: "G-N6VYWB0HS6"
};

try {
    if (typeof firebase !== 'undefined' && firebase) {
        if (!firebase.apps.length) {
            firebase.initializeApp(firebaseConfig);
        }
        db = firebase.firestore();
    } else {
        console.error("Firebase is not loaded.");
    }
} catch (e) {
    console.error("Firebase initialization failed:", e);
    db = null;
}

export { db, firebase };