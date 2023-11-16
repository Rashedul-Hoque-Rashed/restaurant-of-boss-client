import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from 'prop-types';


const PrivateRouter = ({children}) => {

    const {user, isLoading} = useContext(AuthContext);
    const location = useLocation();

    if(isLoading){
        return <p>loading</p>
    }

    if(user){
        return children
    }
    return <Navigate to="/login" state={{from: location}} replace></Navigate>
};

PrivateRouter.propTypes = {
    children: PropTypes.node,
}

export default PrivateRouter;