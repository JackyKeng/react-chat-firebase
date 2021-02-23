# Application install steps:

### `npm install`

Install all dependency package to start application

### `Configure firebase configuration`

Go to [Firebase](https://firebase.google.com/), register new account to procced for configuration.
In this demo we are using Cloud Firestore to manage collections. Create a new Cloud Firestore and replace the configuration below

```js
var firebaseConfig = {
  apiKey: 'AIzaSyCwllcLOH_aS_0KiMIlOHhIsIcSurmgpkY',
  authDomain: 'icllean.firebaseapp.com',
  projectId: 'icllean',
  storageBucket: 'icllean.appspot.com',
  messagingSenderId: '105049352152',
  appId: '1:105049352152:web:af69675e73d0a02318b4ad',
  measurementId: 'G-WYNXBNNB7E'
}
```

### `npm start`

Run as [Client](http://localhost:8080/)
Run as [Agent](http://localhost:8080/agent)
