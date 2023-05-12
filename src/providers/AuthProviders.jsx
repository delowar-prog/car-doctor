import { createContext, useEffect, useState } from 'react'
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/Firebase.config';

export const AuthContext=createContext(null)
const AuthProviders = ({children}) => {
    const auth = getAuth(app);
    const [user, setUser]=useState(null)
    const [loading, setLoading]=useState(true)

    //Sign up with user & pass
    const signUpWithPass=(email, password)=>{
        setLoading(true)
       return createUserWithEmailAndPassword(auth, email, password)
    }

    //Sign in with user & pass
    const signInWithPass=(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    //Sign out
    const userLogout=()=>{
        return signOut(auth)
    }
    //update profile info
    const updateProfileInfo=(name)=>{
        return updateProfile(auth.currentUser, {
            displayName: name
          })
    }

    //set an observer
    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser)
            setLoading(false)
        })
        return ()=>unsubscribe
    },[])
    //pass context value
    const authInfo={
        user,
        loading,
        signUpWithPass,
        signInWithPass,
        userLogout,
        updateProfileInfo
    }
  return (
    <AuthContext.Provider value={authInfo}>
    {children}
    </AuthContext.Provider>
  )
}

export default AuthProviders