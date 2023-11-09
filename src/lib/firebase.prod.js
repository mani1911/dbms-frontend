import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// 1) when seeding the database you'll have to uncomment this!
import { seedDatabase } from '../seed';

const config = {
  apiKey: "AIzaSyDYIk-M-zF503a1t_SVV3VChOZPNFKsEbM",
  authDomain: "dbms-v2.firebaseapp.com",
  projectId: "dbms-v2",
  storageBucket: "dbms-v2.appspot.com",
  messagingSenderId: "605508098570",
  appId: "1:605508098570:web:8a0bae8cec281198895df3"
};

const firebase = Firebase.initializeApp(config);
// 2) when seeding the database you'll have to uncomment this!
// seedDatabase(firebase);
// 3) once you have populated the database (only run once!), re-comment
// this so you don't get duplicate data

export { firebase };
