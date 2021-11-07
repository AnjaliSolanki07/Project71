import firebase from 'firebase'
require("@firebase/firestore")

const firebaseConfig = {
 //Add configuration here
 apiKey: 'AIzaSyA6u5oFs--jDwsKC59kdIKYjU3xM7il0fk',
  authDomain: 'complaint-forum-3e2b0.firebaseapp.com',
  projectId: 'complaint-forum-3e2b0',
  storageBucket: 'complaint-forum-3e2b0.appspot.com',
  messagingSenderId: '705161863134',
  appId: '1:705161863134:web:acf837b676e042ba9c874f',
};
if (!firebase.apps.length) {
   firebase.initializeApp({});
}else {
   firebase.app(); // if already initialized, use that one
};

  export default firebase.firestore()

