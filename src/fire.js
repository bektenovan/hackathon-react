import fire from "firebase/compat/app";
import "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyASBxgwRZOsZaIbeXkmOgV5SlxPo1zevdQ",
  authDomain: "team-hackathon-project.firebaseapp.com",
  projectId: "team-hackathon-project",
  storageBucket: "team-hackathon-project.appspot.com",
  messagingSenderId: "115329192831",
  appId: "1:115329192831:web:89329f75976da3cd72804a",
  measurementId: "G-WQ9P70PH0V",
};

export default fire.initializeApp(firebaseConfig);
