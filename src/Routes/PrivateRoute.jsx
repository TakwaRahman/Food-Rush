import Loading from '../Component/Loading/Loading';
import useAuth from '../Hooks/useAuth';
import { Navigate, useLocation } from 'react-router';


const PrivateRoute = ({ children }) => {

    const { user, loading } = useAuth();

    const location = useLocation();


    if (loading) {
        return <Loading></Loading>
    }

    if (!user) {
        return <Navigate state={location.pathname} to="/login"></Navigate>
    }

    return children
};

export default PrivateRoute;