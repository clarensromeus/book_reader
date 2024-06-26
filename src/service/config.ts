import { getAnalytics } from "firebase/analytics"
import { initializeApp } from "firebase/app"
import { 
    getFirestore,
    getDoc,
    addDoc, 
    getDocs, 
    deleteDoc, 
    updateDoc, 
    collection,
    query,
    FieldValue, 
    Timestamp,
    where,
    orderBy,
    onSnapshot,
    doc
 } from "firebase/firestore";
import {
 getAuth, 
 onAuthStateChanged, 
 createUserWithEmailAndPassword, 
 signInWithEmailAndPassword,
 updatePhoneNumber, 
 signOut, 
 signInWithPopup,
 updateProfile,
 GoogleAuthProvider,
 FacebookAuthProvider
 } from "firebase/auth";
import { getStorage, ref, uploadBytes, getDownloadURL} from "firebase/storage"
import { getMessaging } from "firebase/messaging"


// all the Cloud database configuration
const firebaseConfig = {
  apiKey: "AIzaSyBLW-ddcrGA09zZpDw8SO8toVy0ORVqK_I",
  authDomain: "techytrans.firebaseapp.com",
  projectId: "techytrans",
  storageBucket: "techytrans.appspot.com",
  messagingSenderId: "38290558884",
  appId: "1:38290558884:web:f03ff61c1ca7ca6d3f7b31",
  measurementId: "G-V81RK10B3R",
};

// start by initializing the application
const app = initializeApp(firebaseConfig)

// create a reference from the cloud storage service
/* const storageRef = ref(storage)
// navigate to a location lower in the tree
const booksRef = ref(storageRef, "book")
// now instead of pointing to a directory, we're pointing to specific file
const bigThinking = ref(storageRef, "book/bigthinking.png") */

// initialize the app authentication
const auth = getAuth(app)
// initialize the app database
const db = getFirestore(app)
// get an instance of the cloud storage service
const storage = getStorage(app)
// initialize the app Cloud messaging
const messaging = getMessaging(app)
// initialize the app analytics
const analytics = getAnalytics(app)

// create a reference to the storage service
const storageRef = ref(storage);

// detect user presence in the application
onAuthStateChanged(auth, user => {
    if(user) {
        console.log("user's well authenticated")
        console.log("user photo url : ",user.photoURL)
    } else {
        console.log("sorry, user isn't authenticated")
    }
})

// then export all the services to access further on the application
export {
    // Authentication-related imports 
    auth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updatePhoneNumber,
    signOut,
    signInWithPopup,
    GoogleAuthProvider,
    FacebookAuthProvider,
    updateProfile,
    // cloud firestore database-related imports
    db,
    getDoc,
    addDoc,
    getDocs,
    deleteDoc,
    updateDoc,
    collection,
    query,
    where,
    orderBy,
    onSnapshot,
    Timestamp,
    FieldValue,
    doc,
    // Cloud storage
    storage,
    ref,
    uploadBytes,
    getDownloadURL,
    storageRef,
    // Cloud messaging
    messaging,
    analytics,
}