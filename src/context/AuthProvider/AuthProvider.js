import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
import app from '../../Firebase/firebase.config';

export const AuthContext = createContext()
const auth = getAuth(app)

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)



    const userLogout = ()=>{
        return signOut(auth)
    }

    const userLogin = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleSignIn = (provider) =>{
        return signInWithPopup(auth, provider)
        setLoading(true)
    }

    const createUser = (email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
   

    const updateUser = (userInfo) =>{
        return updateProfile(auth.currentUser, userInfo)
    }

    useEffect(()=>{
        const unsubcrib = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser)
            setLoading(false)
        })
        return ()=> unsubcrib();
    },[])

    const authInfo = {createUser , userLogin , user, userLogout , updateUser , loading,
        googleSignIn
    }
    return (
        <AuthContext.Provider value={authInfo} >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;