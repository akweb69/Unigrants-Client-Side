import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthContext/AuthProvider";
import { Navigate } from "react-router-dom";
import useAllUser from "../Hooks/useAllUser";

const ModeratorRout = ({ children }) => {

    const [role, setRole] = useState("");
    const [users, refetch, isLoading] = useAllUser();
    const { user, loading, logout } = useContext(AuthContext);

    useEffect(() => {
        const dUser = users.filter(hi => hi.email === user?.email)[0]
        setRole(dUser?.role)

        // console.log("form---Moderator-->", dUser?.role)
        // console.log(typeof ("fro---->", role))


    }, [users, user])

    console.log(role, loading, user)

    if (loading || isLoading || role !== "Moderator") {
        return <div>Loading...</div>;
    }


    if (role === "Moderator") {
        return children
    }




    return <Navigate to="/login" replace />;
};

export default ModeratorRout;
