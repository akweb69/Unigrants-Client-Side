import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthContext/AuthProvider";
import { Navigate } from "react-router-dom";
import useAllUser from "../Hooks/useAllUser";

const AdminRout = ({ children }) => {

    const [role, setRole] = useState("");
    const [users, refetch, isLoading] = useAllUser();
    const { user, loading, logout } = useContext(AuthContext);

    useEffect(() => {
        const dUser = users.filter(hi => hi.email === user?.email)[0]
        setRole(dUser?.role)

        // console.log("form---admin-->", dUser?.role)
        // console.log(typeof ("fro---->", role))


    }, [users, user])

    console.log(role, loading, user)

    if (loading || isLoading || role !== "Admin") {
        return <div>Loading...</div>;
    }


    if (role === "Admin") {
        return children
    }




    return <Navigate to="/login" replace />;
};

export default AdminRout;
