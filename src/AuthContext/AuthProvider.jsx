import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/firebaseConig";
import useAxiosPublic from "../Hooks/useAxiosPublic";

export const AuthContext = createContext();
const axiosPublic = useAxiosPublic()

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
        loading,
        setLoading,
        user,
        setUser
    }

    useEffect(() => {
        // Subscribe to authentication state changes
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);

            if (currentUser) {
                const userEmail = { email: currentUser.email }
                axiosPublic.post("/jwt", userEmail)
                    .then(res => {
                        const data = res.data;
                        console.log("from token--->", data)
                        if (data.token) {
                            localStorage.setItem("Access_Token", data.token)
                        }
                    })
                    .catch(err => {
                        console.log("token err----> ", err)
                    })
            }
            else {
                localStorage.removeItem("Access_Token")
            }

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