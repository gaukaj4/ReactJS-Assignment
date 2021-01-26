import firebase from 'firebase';
var firebaseConfig = {
    apiKey: "AIzaSyDodoWC_vklLiEv8brbdcU0QnrVWgGeDFg",
    authDomain: "my-new-app-c0a1a.firebaseapp.com",
    projectId: "my-new-app-c0a1a",
    storageBucket: "my-new-app-c0a1a.appspot.com",
    messagingSenderId: "533440007966",
    appId: "1:533440007966:web:af3d92a69064c228d7030f",
    measurementId: "G-8FFL7YEB3N"
  };
  const fire = firebase.initializeApp(firebaseConfig);
  export default fire;