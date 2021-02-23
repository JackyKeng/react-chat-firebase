import firebase from 'firebase/app'

import 'firebase/auth'
import 'firebase/firestore'

var firebaseConfig = {
  apiKey: 'AIzaSyCwllcLOH_aS_0KiMIlOHhIsIcSurmgpkY',
  authDomain: 'icllean.firebaseapp.com',
  projectId: 'icllean',
  storageBucket: 'icllean.appspot.com',
  messagingSenderId: '105049352152',
  appId: '1:105049352152:web:af69675e73d0a02318b4ad',
  measurementId: 'G-WYNXBNNB7E'
}

firebase.initializeApp(firebaseConfig)

const auth = firebase.auth()
const firestore = firebase.firestore()

export { auth, firestore }
