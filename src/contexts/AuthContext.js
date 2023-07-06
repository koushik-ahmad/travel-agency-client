import React from 'react';
import { createContext } from 'react';
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, sendPasswordResetEmail } from "firebase/auth";
import app from '../firebase/firebase.config';
import { useState } from 'react';
import { useEffect } from 'react';
import { GoogleAuthProvider } from 'firebase/auth';


export const UserContext = createContext();
const auth = getAuth(app);

const AuthContext = ({ children }) => {
    const [user, setUser] = useState(null);

    const provider = new GoogleAuthProvider();

    // create user
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // Sign in Email & password
    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    // google Login
    const googleSignIn = () => {
        return signInWithPopup(auth, provider);
    }

    // logOut 
    const logOut = () => {
        return signOut(auth);
    }

    // forget password 
    const resetPassword = (email) => {
        return sendPasswordResetEmail(auth, email);
    }


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log("current user inside state", currentUser);
            setUser(currentUser);
        })

        return () => unsubscribe();

    }, []);


    const authInfo = { user, createUser, signIn, googleSignIn, resetPassword, logOut };

    return (
        <UserContext.Provider value={authInfo}>
            {children}
        </UserContext.Provider>
    );
};

export default AuthContext;