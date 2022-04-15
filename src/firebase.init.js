import { getAuth, initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyARpSMvm_IiUspEVNd7oEioLz0VayXRhnY',
  authDomain: 'hungry-now-f63c3.firebaseapp.com',
  projectId: 'hungry-now-f63c3',
  storageBucket: 'hungry-now-f63c3.appspot.com',
  messagingSenderId: '650196188531',
  appId: '1:650196188531:web:681e5902f7a11a8c8c9906',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
