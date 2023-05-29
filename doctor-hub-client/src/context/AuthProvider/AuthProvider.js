import React, { useEffect, useState } from "react";
import { createContext } from "react";
import app from "../../Firebase/firebase.config";
import {
    createUserWithEmailAndPassword,
    getAuth,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut,
    updateProfile,
} from "firebase/auth";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // create user with email
    const signUpUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    // sign in user with email
    const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    // logout User
    const signOutUser = () => {
        setLoading(true);
        return signOut(auth);
    };

    // update user profile

    const updateUserProfile = (profile) => {
        return updateProfile(auth.currentUser, profile);
    };

    // get user profile
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setLoading(false);
            setUser(currentUser);
        });

        return () => {
            return unsubscribe();
        };
    }, []);
    const authInfo = {
        signUpUser,
        signInUser,
        updateUserProfile,
        user,
        signOutUser,
        loading,
    };
    return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
};

export default AuthProvider;
