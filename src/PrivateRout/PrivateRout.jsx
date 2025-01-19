import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthContext/AuthProvider";
import { Navigate } from "react-router-dom";
import useAllUser from "../Hooks/useAllUser";

const PrivateRoute = ({ children }) => {

    const [role, setRole] = useState("");
    const [users, refetch, isLoading] = useAllUser();
    const { user, loading, logout } = useContext(AuthContext);

    useEffect(() => {
        const dUser = users.filter(hi => hi.email === user?.email)[0]
        setRole(dUser?.role)
    }, [users, isLoading, user])


    if (loading) {
        return <div>Loading...</div>;
    }


    if (!user && !user?.email) {
        return <Navigate to="/login" replace />;
    }

    return children;

};

export default PrivateRoute;
