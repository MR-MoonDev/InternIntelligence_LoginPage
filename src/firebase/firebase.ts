import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDOMZLJ-zcUMyKnSJU_8gaVtxQqVitqXB0",
  authDomain: "interne-loginpage.firebaseapp.com",
  projectId: "interne-loginpage",
  storageBucket: "interne-loginpage.firebaseapp.com",
  messagingSenderId: "536426928402",
  appId: "1:536426928402:web:7ac3a8a9e6a165ca327bcb"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
