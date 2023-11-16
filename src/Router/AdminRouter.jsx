import { Navigate, useLocation } from "react-router-dom";
import Auth from "../Hooks/Auth";
import useAdmin from "../Hooks/useAdmin";
import PropTypes from 'prop-types';


const AdminRouter = ({children}) => {
    const {user, isLoading} = Auth();
    const [isAdmin, isAdminLoading] = useAdmin();
    const location = useLocation();

    if(isLoading || isAdminLoading){
        return <p>loading</p>
    }

    if(user && isAdmin){
        return children
    }
    return <Navigate to="/" state={{from: location}} replace></Navigate>
};

AdminRouter.propTypes = {
    children: PropTypes.node,
}

export default AdminRouter;