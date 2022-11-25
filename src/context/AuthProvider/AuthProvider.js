import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth'
import app from '../../Firebase/firebase.config';

export const AuthContext = createContext()
const auth = getAuth(app)

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null)



    const userLogout = ()=>{
        return signOut(auth)
    }

    const userLogin = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    }
   

    const updateUser = (userInfo) =>{
        return updateProfile(auth.currentUser, userInfo)
    }

    useEffect(()=>{
        const unsubcrib = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser)
        })
        return ()=> unsubcrib();
    },[])

    const authInfo = {createUser , userLogin , user, userLogout , updateUser}
    return (
        <AuthContext.Provider value={authInfo} >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;