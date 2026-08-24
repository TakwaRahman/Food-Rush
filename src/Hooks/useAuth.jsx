import { useContext } from "react";
import { AuthContext } from '../Component/context/AuthContext';


const useAuth = () => {

    const authInfo = useContext(AuthContext)

    return authInfo
};

export default useAuth;