import React from 'react';
import { createContext } from 'react';
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, sendPasswordResetEmail, updateProfile, sendEmailVerification } from "firebase/auth";
import app from '../firebase/firebase.config';
import { useState } from 'react';
import { useEffect } from 'react';
import { GoogleAuthProvider } from 'firebase/auth';


export const UserContext = createContext();
const auth = getAuth(app);

const AuthContext = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const provider = new GoogleAuthProvider();

    // create user
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // update name 
    const updateName = (name) => {
        setLoading(true);
        return updateProfile(auth.currentUser, { displayName: name });
    }

    // verify email 
    const verifyEmail = () => {
        setLoading(true);
        return sendEmailVerification(auth.currentUser);
    }

    // Sign in Email & password
    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    // google Login
    const googleSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, provider);
    }

    // logOut 
    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    // forget password 
    const resetPassword = (email) => {
        setLoading(true);
        return sendPasswordResetEmail(auth, email);
    }


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log("current user inside state", currentUser);
            setUser(currentUser);
            setLoading(false);
        })

        return () => unsubscribe();

    }, []);


    const authInfo = {
        user,
        createUser,
        updateName,
        verifyEmail,
        signIn,
        googleSignIn,
        resetPassword,
        logOut,
        loading,
    };

    return (
        <UserContext.Provider value={authInfo}>
            {children}
        </UserContext.Provider>
    );
};

export default AuthContext;