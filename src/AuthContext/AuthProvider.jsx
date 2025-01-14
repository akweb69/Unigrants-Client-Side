import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/firebaseConig";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {

    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);


    const provider = new GoogleAuthProvider();
    // email password login function
    const loginEmailandPassword = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    //  create user with email and password
    const createUserWithEmailAndPass = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    // social login with gmail
    const googleLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, provider)
    }
    // log out user
    const logout = () => {
        setLoading(true)
        return signOut(auth)
    }





    const ContextData = {
        loginEmailandPassword,
        createUserWithEmailAndPass,
        googleLogin,
        logout,
    }

    useEffect(() => {
        // Subscribe to authentication state changes
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
            console.log("current user ----> ", currentUser)
        });

        // Cleanup subscription on component unmount
        return () => unsubscribe();
    }, []);

    return (
        <AuthContext.Provider value={ContextData}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;