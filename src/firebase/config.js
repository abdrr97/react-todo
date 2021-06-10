import firebase from 'firebase'

// npm install firebase

const config = {
  apiKey: 'AIzaSyCXZV4ccdeedtCBLLLXIQ3WKc_54Ca-PnI',
  authDomain: 'react-firebase-test-74545.firebaseapp.com',
  projectId: 'react-firebase-test-74545',
  storageBucket: 'react-firebase-test-74545.appspot.com',
  messagingSenderId: '520303714345',
  appId: '1:520303714345:web:356167da27d1f19956fc38',
}

const firebaseConfig = firebase.initializeApp(config)
const db = firebaseConfig.firestore()

export { db }
