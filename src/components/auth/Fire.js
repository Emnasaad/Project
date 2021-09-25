import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyC7vYWod3l5Tc9fnMK9CUhrDs7_roRmuv0",
    authDomain: "biblioproject-ceab5.firebaseapp.com",
    databaseURL: "https://biblioproject-ceab5.firebaseio.com",
    projectId: "biblioproject-ceab5",
    storageBucket: "biblioproject-ceab5.appspot.com",
    messagingSenderId: "796480637207",
    appId: "1:796480637207:web:ce5a1d3fb3bd9b53dc4f52"
};

const fire = firebase.initializeApp(config);
export default fire;