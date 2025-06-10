import { useAuth } from "../context/authContext";
import { Navigate, useLocation } from "react-router-dom";
import { Loader } from "../pages/auth/AuthPage";

function RoutesProtected({children}) {
    const {user, loading} = useAuth();
    const location = useLocation();

    if (loading) return <Loader />; 

    if (!user) {
        return <Navigate to = '/' state={{from: location}} />
    }
    if (user && location.pathname === '/') {
        return <Navigate to = '/Home' replace/>
    }

    return children;
}

export default RoutesProtected