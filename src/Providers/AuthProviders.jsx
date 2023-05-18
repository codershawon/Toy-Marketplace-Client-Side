import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import app from '../firebase/firebaseConfig';
const auth=getAuth(app)
const googleProvider = new GoogleAuthProvider();
export const AuthContext=createContext()
const AuthProviders = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
  
    const createUser = (email, password,displayName,photoURL) => {
      setLoading(true);
      return createUserWithEmailAndPassword(auth, email, password,displayName,photoURL);
    };
    const signInUser = (email, password) => {
      setLoading(true);
      return signInWithEmailAndPassword(auth, email, password);
    };
    const signInWithGoogle=()=>{
        setLoading(true)
        return signInWithPopup(auth,googleProvider)
    }
    const logout = () => {
      setLoading(true)
      return signOut(auth);
    };
    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
        console.log("Current User", currentUser);
        setLoading(false);
      });
      return () => {
        return unsubscribe();
      };
    }, []);
    const updateUserProfile = (displayName, photoURL) => {
        return updateProfile(auth.currentUser, { displayName, photoURL });
      };
    const authInfo = {
      user,
      loading,
      createUser,
      signInUser,
      signInWithGoogle,
      updateUserProfile,
      logout
    };
    return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
};

export default AuthProviders;