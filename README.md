# Application install steps:

### `npm install`

Install all dependency package to start application

### `Configure firebase configuration`

Go to [Firebase](https://firebase.google.com/), register new account to procced for configuration.\
In this demo we are using Cloud Firestore to manage collections. Create a new Cloud Firestore and replace the configuration below

```js
var firebaseConfig = {
  apiKey: '<API_KEY>',
  authDomain: '<AUTH_DOMAIN>',
  projectId: '<PROJECT_ID>',
  storageBucket: '<STORAGE_BUCKET>',
  messagingSenderId: '<MESSAGE_SENDER_ID>',
  appId: '<APP_ID>',
  measurementId: '<MEASUREMENT_ID>'
}
```

### `npm start`

Run as [Client](http://localhost:8080/)\
Run as [Agent](http://localhost:8080/agent)
