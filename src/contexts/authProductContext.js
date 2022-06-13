import fire from "../fire"
import React, { useEffect, useState } from "react";

export const authProductContext = React.createContext();

const AuthProductContextProvider = ({children})=>{
    const [currentUser, setCurrentUser] = useState("");
    const [error , setError ] = useState("");

    function signUp(email, password, navigate){
        fire
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(()=> navigate("/login"))
        .catch((error)=> setError(error.message));
    }

    function login (email, password, navigate){
        fire
        .auth().signInWithEmailAndPassword(email, password)
        .then(()=> navigate("/products"))
        .catch((error)=> setError(error.message));
    }
    
    function logOut(){
        fire.auth().signOut();
    }

    function authListener(){
        fire.auth().onAuthStateChanged(user=>{
            if(user){
                setCurrentUser(user);
            }else{
                setCurrentUser('');
            }
        });
    }

useEffect(authListener, []);

return<authProductContext.Provider value = {{currentUser, error, signUp, login, logOut}}>{children}</authProductContext.Provider>
}
export default AuthProductContextProvider;