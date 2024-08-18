import {  createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "./firebase.config";
import { GoogleAuthProvider } from "firebase/auth";

export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();


const FirebaseProvider = ({children}) => {
  const [user, setUser]= useState(null);
const [loading, setLoading] = useState(true)


// create user with email and password
const createUser = (email, password) =>{
  setLoading(true)
  return createUserWithEmailAndPassword(auth, email, password)
 }


//  sign in user
const signIn = (email, password)=>{
  setLoading(true)
  return signInWithEmailAndPassword(auth, email, password)
}

// google login

const googleLogIn = () =>{
  setLoading(true)
  return signInWithPopup(auth, googleProvider)
.then(result =>{
  console.log(result)
})
.catch(error=>{
  console.log(error)
})
}


// logOut 
const logOut =()=>{
  setUser(null);
  signOut(auth)
  
}

// Observer
useEffect(()=>{
  const unsubscribe = onAuthStateChanged(auth, (user) => {
 
      
      setUser(user)
      setLoading(false)
  });
  return ()=> unsubscribe()
}, []);
const values = {
  createUser,
  signIn,
  googleLogIn,
  user,
  logOut,
  loading,
}
  return (
    <AuthContext.Provider value={values}>
      {children}
    </AuthContext.Provider>
  );
};

export default FirebaseProvider;