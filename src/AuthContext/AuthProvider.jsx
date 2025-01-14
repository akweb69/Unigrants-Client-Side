import { createContext } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {











    const ContextData = {
        hi: "hi"
    }

    return (
        <AuthContext.Provider value={ContextData}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;