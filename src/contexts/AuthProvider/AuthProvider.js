import { } from '@testing-library/user-event/dist/utils';
import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'
import app from '../../firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const googleProvider = new GoogleAuthProvider();


    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const signInWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);

    }

    const logOut = () => {
        return signOut(auth);
    }

     useEffect( ()=>{
      const unsubscribe = onAuthStateChanged(auth,currentUser =>{

             setUser(currentUser);
             setLoading(false)
             console.log('auth state changed',currentUser);
         });
         return () =>{
             return unsubscribe();
         }
      }, [])

    useEffect(() => {

        const unSubscriber = onAuthStateChanged(auth, (currentUser) => {
            console.log(currentUser);
            setUser(currentUser);
            setLoading(false)

        });

        return () => unSubscriber();

    }, [])


    const authInfo = {
        user,
        loading,
        createUser,
        login,
        logOut,
        signInWithGoogle,

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;